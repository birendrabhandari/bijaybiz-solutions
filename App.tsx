import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  CreditCard, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Zap, 
  Users,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Facebook,
  Instagram,
  Star
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Registration', href: '#registration' },
    { name: 'Payments', href: '#payments' },
    { name: 'Banking', href: '#banking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
          <span className="font-display font-bold text-xl tracking-tighter text-brand-primary">
            BIJAYBIZ<span className="text-brand-accent">SOLUTIONS</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-brand-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-brand-primary text-white px-6 py-3 rounded-xl text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80" 
          alt="Business Background" 
          className="w-full h-full object-cover opacity-[0.05] grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              Trusted Business Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-slate-900">
              Launch Your Global <br />
              <span className="text-brand-accent">Business Today.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              We provide end-to-end solutions for non-residents to register companies in the USA & UK, set up professional banking, and integrate global payment gateways.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
              >
                Start Registration <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                View Services
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">500+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">LLCs Formed</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Success Rate</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">24/7</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest">Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80" 
                alt="Business Registration Portal" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay to simulate screen content feel */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating elements - Enhanced for USA/UK focus */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Registration</p>
                  <p className="text-sm font-bold text-slate-900">🇺🇸 USA LLC Approved</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 animate-pulse-slow hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Formation</p>
                  <p className="text-sm font-bold text-slate-900">🇬🇧 UK LTD Active</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 border border-slate-100 animate-bounce-slow delay-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Payments</p>
                  <p className="text-sm font-bold text-slate-900">Stripe & Wise Ready</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ id, title, subtitle, icon: Icon, items, colorClass, onLearnMore }: any) => {
  return (
    <section id={id} className="py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", colorClass)}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item: any, idx: number) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                {item.image ? (
                  <div className="w-full h-32 rounded-2xl overflow-hidden mb-4">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    {item.icon ? <item.icon className="w-6 h-6 text-slate-400 group-hover:text-brand-accent" /> : <CheckCircle2 className="w-6 h-6 text-brand-accent" />}
                  </div>
                )}
                <span className="text-xs font-bold text-slate-300 group-hover:text-brand-accent/50 transition-colors">0{idx + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.description || "Professional setup and management for your business needs."}
              </p>
              <ul className="space-y-2 mb-8">
                {item.features?.map((f: string) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                    <div className="w-1 h-1 bg-brand-accent rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => onLearnMore(item)}
                className="text-sm font-bold text-brand-primary flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ahmed Al-Fayed",
      role: "Founder, TechFlow Dubai",
      content: "BIJAYBIZ made my USA LLC registration incredibly smooth. I was worried about being a non-resident, but they handled everything from EIN to banking setup. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Sarah Jenkins",
      role: "E-commerce Seller, UK",
      content: "The best service for UK LTD formation. They also helped me get my Wise Business account verified in record time. Professional and very responsive team.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Rajesh Kumar",
      role: "SaaS Entrepreneur, India",
      content: "I needed a Stripe-ready business structure. BIJAYBIZ delivered exactly what they promised. The consultation was clear and the execution was flawless.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Digital Nomad, Spain",
      content: "Setting up a business while traveling is hard, but their end-to-end support made it feel easy. They are experts in international compliance.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "David Chen",
      role: "Import/Export Business, Singapore",
      content: "Reliable, fast, and transparent. Their banking services helped us secure a Bank of America account without any hassle. 5 stars!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Bishal Thapa",
      role: "Tech Startup Founder, Nepal",
      content: "As a founder from Nepal, I was struggling to find a way to register my business in the USA. BIJAYBIZ made it possible and handled all the complex paperwork efficiently. Excellent service!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Join hundreds of successful entrepreneurs who have scaled their businesses with our help.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-6 text-sm leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-50"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'USA LLC Registration',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [emailStatus, setEmailStatus] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'USA LLC Registration', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/10 blur-[120px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to scale your <br /><span className="text-brand-accent">business globally?</span></h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Fill out the form and our consultants will get back to you within 24 hours with a personalized strategy.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us at</p>
                  <p className="text-lg font-semibold">contact@bijaybizsolutions.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp us at</p>
                  <a href="https://wa.me/17432592090" target="_blank" rel="noreferrer" className="text-lg font-semibold hover:text-brand-accent transition-colors">
                    +1 (743) 259-2090
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Global Office</p>
                  <p className="text-lg font-semibold">Delaware, USA / London, UK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h3>
                <p className="text-slate-600 mb-8">Thank you for reaching out. We have received your details and will contact you shortly.</p>
                
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-brand-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-900"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Service Required</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-900 appearance-none bg-white"
                  >
                    <option>USA LLC Registration</option>
                    <option>UK LTD Registration</option>
                    <option>Payment Gateway Setup</option>
                    <option>Business Banking</option>
                    <option>EIN / ITIN Processing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your business goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-accent focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-slate-900"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
                {status === 'error' && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


const Footer = ({ onPrivacyClick, onTermsClick }: { onPrivacyClick: () => void, onTermsClick: () => void }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                B
              </div>
              <span className="font-display font-bold text-lg tracking-tighter text-brand-primary">
                BIJAYBIZ<span className="text-brand-accent">SOLUTIONS</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering entrepreneurs worldwide with seamless business formation and financial infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/bijaybizsolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/bijaybizsolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent">About Us</a></li>
              <li><a href="#" className="hover:text-brand-accent">Our Process</a></li>
              <li><a href="#" className="hover:text-brand-accent">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-brand-accent">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-accent">USA LLC Formation</a></li>
              <li><a href="#" className="hover:text-brand-accent">UK LTD Formation</a></li>
              <li><a href="#" className="hover:text-brand-accent">EIN/ITIN Processing</a></li>
              <li><a href="#" className="hover:text-brand-accent">Banking Setup</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-4">Stay updated with the latest business laws and opportunities.</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-brand-accent w-full"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-bold disabled:opacity-50"
              >
                {status === 'loading' ? '...' : status === 'success' ? '✓' : 'Join'}
              </button>
            </form>
            {status === 'success' && <p className="text-[10px] text-emerald-600 mt-2 font-bold">Subscribed successfully!</p>}
            {status === 'error' && <p className="text-[10px] text-red-500 mt-2 font-bold">Failed. Try again.</p>}
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2026 BIJAYBIZSOLUTIONS. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <button onClick={onPrivacyClick} className="hover:text-slate-900">Privacy Policy</button>
            <button onClick={onTermsClick} className="hover:text-slate-900">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PolicyModal = ({ title, content, onClose }: { title: string, content: React.ReactNode, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[80vh]"
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-auto p-8 text-slate-600 leading-relaxed space-y-4">
          {content}
        </div>
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ServiceModal = ({ item, onClose }: { item: any, onClose: () => void }) => {
  if (!item) return null;
  
  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-3xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white">
              {item.icon ? <item.icon className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{item.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="overflow-auto p-8">
          {item.image && (
            <div className="w-full h-64 rounded-2xl overflow-hidden mb-8">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          )}
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Overview</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.longDescription || item.description || "We provide comprehensive support for this service, ensuring all legal and technical requirements are met for your business success."}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {item.features?.map((f: string) => (
                    <li key={f} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose This?</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Our expert team handles the entire process end-to-end, providing you with a hassle-free experience and guaranteed compliance with international standards.
                </p>
                <button 
                  onClick={() => {
                    onClose();
                    window.location.href = '#contact';
                  }}
                  className="w-full mt-6 bg-brand-primary text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const registrationServices = [
    { 
      name: "🇺🇸 USA Non-Resident LLC", 
      description: "Complete formation in any US state (Delaware, Wyoming, etc.) for non-residents. Starting at $399.",
      longDescription: "Our USA LLC formation service is designed specifically for non-residents looking to tap into the US market. We handle everything from the initial Articles of Organization to obtaining your EIN and setting up a registered agent. This service ensures you are fully compliant with both state and federal regulations, allowing you to operate your business with peace of mind.",
      features: ["Articles of Organization", "Operating Agreement", "Registered Agent Service", "Compliance Support", "Price: $399"],
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
    },
    { 
      name: "🆔 EIN & ITIN Processing", 
      description: "Fast-track Employer Identification Number and Individual Taxpayer ID Number acquisition. Starting at $199.",
      longDescription: "Navigating the IRS can be daunting. We simplify the process of obtaining your EIN (Employer Identification Number) and ITIN (Individual Taxpayer Identification Number). Whether you need an EIN for your new LLC or an ITIN for personal tax purposes, our team ensures your applications are prepared correctly and processed as quickly as possible.",
      features: ["SS-4 Form Preparation", "IRS Communication", "Certified Acceptance Agent Support", "Price: $199"]
    },
    { 
      name: "🇬🇧 UK Non-Resident LTD", 
      description: "Establish your UK presence with a Limited company registration from anywhere. Starting at $499.",
      longDescription: "The UK offers a robust environment for international business. Our UK LTD formation service covers registration with Companies House, providing a registered office address, and ensuring all statutory requirements are met. We help you establish a professional UK presence, complete with a Certificate of Incorporation and all necessary company documents.",
      features: ["Companies House Filing", "Registered Office Address", "Certificate of Incorporation", "Price: $499"],
      image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const paymentServices = [
    { 
      name: "PayPal Business", 
      description: "Verified business account setup for global transactions.", 
      longDescription: "PayPal is a global leader in online payments. We assist you in setting up and verifying a professional PayPal Business account, ensuring you can accept payments from customers worldwide securely and efficiently.",
      icon: CreditCard 
    },
    { 
      name: "Wise Business", 
      description: "Multi-currency accounts with real exchange rates.", 
      longDescription: "Wise (formerly TransferWise) offers the best rates for international transfers. We help you set up a Wise Business account, allowing you to hold and exchange multiple currencies at the real mid-market rate, saving you money on every transaction.",
      icon: Globe 
    },
    { 
      name: "Revolut Business", 
      description: "Modern business banking and expense management.", 
      longDescription: "Revolut Business provides a powerful platform for managing your company's finances. From multi-currency accounts to corporate cards and expense management tools, we help you leverage Revolut's modern banking features to grow your business.",
      icon: Zap 
    },
    { 
      name: "Mercury Business", 
      description: "Banking built specifically for startups and tech companies.", 
      longDescription: "Mercury is the go-to banking solution for tech startups. We facilitate your application for a Mercury account, giving you access to a suite of tools designed to help your startup scale, including API access and seamless integrations.",
      icon: Building2 
    },
    { 
      name: "WorldFirst Business", 
      description: "Specialized international payment solutions for e-commerce.", 
      longDescription: "WorldFirst specializes in helping e-commerce businesses manage international payments. We help you set up local currency accounts in major markets, making it easier and cheaper to receive funds from global marketplaces like Amazon and eBay.",
      icon: Globe 
    }
  ];

  const bankingServices = [
    { 
      name: "Bank of America", 
      longDescription: "As one of the largest banks in the US, Bank of America offers unparalleled global recognition and a suite of advanced online banking tools. We help you navigate their application process to secure a business account that grows with you.",
      features: ["Global Recognition", "Advanced Online Banking", "Business Credit Lines"] 
    },
    { 
      name: "USA Bank", 
      longDescription: "USA Bank provides personalized service and competitive rates, making it an excellent choice for businesses looking for a reliable domestic banking partner. We assist in preparing all necessary documentation for a smooth account opening.",
      features: ["Personalized Service", "Competitive Rates", "Nationwide Access"] 
    },
    { 
      name: "U.S. Century Bank", 
      longDescription: "U.S. Century Bank focuses on specialized business solutions with local expertise. They offer tailored banking products that cater to the unique needs of your business, and we help you build that relationship.",
      features: ["Specialized Business Focus", "Local Expertise", "Tailored Solutions"] 
    },
    { 
      name: "Barclays", 
      longDescription: "Barclays is a UK banking giant with extensive experience in international trade. We facilitate your application for a Barclays business account, giving you access to their corporate banking solutions and global network.",
      features: ["UK Banking Giant", "International Trade Support", "Corporate Banking Solutions"] 
    },
    { 
      name: "Lloyds Bank", 
      longDescription: "Lloyds Bank is a leading UK retail bank that offers dedicated relationship managers and business growth loans. We help you establish a banking presence with Lloyds to support your UK business operations.",
      features: ["Leading UK Retail Bank", "Business Growth Loans", "Dedicated Relationship Managers"] 
    }
  ];

  const privacyContent = (
    <>
      <p>At BIJAYBIZSOLUTIONS, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>
      <h3 className="font-bold text-slate-900 mt-4">1. Information Collection</h3>
      <p>We collect information you provide directly to us when you fill out our inquiry forms, including your name, email address, and business details.</p>
      <h3 className="font-bold text-slate-900 mt-4">2. Use of Information</h3>
      <p>We use the information to process your business registration, communicate with you about our services, and provide customer support.</p>
      <h3 className="font-bold text-slate-900 mt-4">3. Data Protection</h3>
      <p>We implement industry-standard security measures to protect your data from unauthorized access or disclosure.</p>
      <h3 className="font-bold text-slate-900 mt-4">4. Third-Party Sharing</h3>
      <p>We do not sell your personal information. We only share data with trusted partners (like banks or government agencies) necessary to complete your requested services.</p>
    </>
  );

  const termsContent = (
    <>
      <p>By using our services, you agree to the following terms and conditions.</p>
      <h3 className="font-bold text-slate-900 mt-4">1. Service Scope</h3>
      <p>BIJAYBIZSOLUTIONS provides consultancy and facilitation for business registration, banking setup, and payment gateway integration.</p>
      <h3 className="font-bold text-slate-900 mt-4">2. User Responsibilities</h3>
      <p>Users are responsible for providing accurate and truthful information for all legal filings and applications.</p>
      <h3 className="font-bold text-slate-900 mt-4">3. Fees and Payments</h3>
      <p>All service fees are clearly stated before engagement. Fees are generally non-refundable once government filings have been initiated.</p>
      <h3 className="font-bold text-slate-900 mt-4">4. Limitation of Liability</h3>
      <p>While we strive for 100% success, final approval of bank accounts and payment gateways rests with the respective institutions.</p>
    </>
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div id="services">
        <ServiceSection 
          id="registration"
          title="Company Registration" 
          subtitle="We handle the complex legal paperwork so you can focus on growing your business. Fast, reliable, and 100% compliant."
          icon={Globe}
          items={registrationServices}
          colorClass="bg-emerald-500"
          onLearnMore={setSelectedService}
        />
        
        <ServiceSection 
          id="payments"
          title="Payment Gateways" 
          subtitle="Accept payments from customers worldwide. We help you set up and verify professional merchant accounts."
          icon={CreditCard}
          items={paymentServices}
          colorClass="bg-blue-500"
          onLearnMore={setSelectedService}
        />
        
        <ServiceSection 
          id="banking"
          title="Banking Services" 
          subtitle="Secure your business finances with top-tier US and international banks. We facilitate the entire application process."
          icon={Building2}
          items={bankingServices}
          colorClass="bg-slate-800"
          onLearnMore={setSelectedService}
        />
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We've helped hundreds of entrepreneurs bridge the gap between their local markets and the global economy.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Expert Guidance", desc: "Our team knows the ins and outs of international business laws and banking requirements.", icon: Users },
              { title: "Fast Turnaround", desc: "We prioritize speed without compromising on compliance or quality of service.", icon: Zap },
              { title: "End-to-End Support", desc: "From the first filing to the first payment received, we are with you every step.", icon: ShieldCheck }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-accent">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <ContactForm />
      <Footer 
        onPrivacyClick={() => setPolicyType('privacy')} 
        onTermsClick={() => setPolicyType('terms')} 
      />

      {policyType === 'privacy' && (
        <PolicyModal 
          title="Privacy Policy" 
          content={privacyContent} 
          onClose={() => setPolicyType(null)} 
        />
      )}
      {policyType === 'terms' && (
        <PolicyModal 
          title="Terms of Service" 
          content={termsContent} 
          onClose={() => setPolicyType(null)} 
        />
      )}
      {selectedService && (
        <ServiceModal 
          item={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
}
