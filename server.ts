import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Database Setup
const db = new Database("database.sqlite");
db.exec(`
  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    service TEXT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

app.use(express.json());

// Email Transporter Setup
const getEnv = (key: string) => {
  // Check for exact match, then uppercase, then lowercase
  return process.env[key] || process.env[key.toUpperCase()] || process.env[key.toLowerCase()];
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: getEnv("SMTP_USER") || "bijaybizsolutions@gmail.com",
    pass: (getEnv("SMTP_PASS") || "ksdzgjsqyofjpjrz").replace(/\s+/g, ""),
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to take our messages");
  }
});

// API Routes
app.post("/api/inquiries", async (req, res) => {
  const { name, email, service, message } = req.body;
  
  if (!name || !email || !service) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const smtpUser = getEnv("SMTP_USER") || "bijaybizsolutions@gmail.com";
  const receiverEmail = getEnv("RECEIVER_EMAIL") || "bijaybizsolutions@gmail.com";

  console.log(`📩 New inquiry received from ${name} (${email}) for ${service}`);

  try {
    // 1. Save to Database (Always do this)
    const stmt = db.prepare("INSERT INTO inquiries (name, email, service, message) VALUES (?, ?, ?, ?)");
    stmt.run(name, email, service, message);
    console.log("💾 Inquiry saved to database.");

    // 2. Send Email Notification
    const mailOptions = {
      from: `"BIJAYBIZ Website" <${smtpUser}>`,
      to: receiverEmail,
      subject: `🚀 New Inquiry: ${service} from ${name}`,
      text: `New Business Inquiry:\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px; max-width: 600px;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 10px;">New Business Inquiry</h2>
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Service:</strong> <span style="background: #f0fdf4; padding: 2px 6px; border-radius: 4px; color: #166534;">${service}</span></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 15px;">
            <p style="margin: 0; font-weight: bold; color: #64748b; font-size: 12px; text-transform: uppercase;">Message:</p>
            <p style="margin: 5px 0; color: #334155;">${message || 'No message provided.'}</p>
          </div>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #94a3b8;">This inquiry was sent from your website contact form on ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    console.log("📧 Attempting to send email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.messageId);
    res.json({ success: true, emailSent: true, message: "Inquiry received and email sent." });

  } catch (err) {
    console.error("❌ Error handling inquiry:", err);
    res.json({ 
      success: true, 
      emailSent: false, 
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
});

app.post("/api/newsletter", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const stmt = db.prepare("INSERT INTO subscribers (email) VALUES (?)");
    stmt.run(email);
    console.log(`📧 New newsletter subscriber: ${email}`);
    res.json({ success: true, message: "Subscribed successfully!" });
  } catch (err: any) {
    if (err.code === 'SQLITE_CONSTRAINT') {
      return res.json({ success: true, message: "Already subscribed!" });
    }
    console.error("❌ Newsletter error:", err);
    res.status(500).json({ error: "Failed to subscribe" });
  }
});

// Vite middleware for development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(__dirname));
    
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, 'index.html'));
  
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
