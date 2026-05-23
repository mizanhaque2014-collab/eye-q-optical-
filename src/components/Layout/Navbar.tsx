import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Eye, Phone, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, STORE_NAME, MAIN_WHATSAPP } from '../../constants';
import { cn, getWhatsAppLink } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6',
        scrolled ? 'bg-premium-blue/90 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <span className={cn(
            "text-2xl md:text-3xl font-extrabold tracking-tight transition-colors",
            scrolled || isOpen ? "text-white" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          )}>
            EYE-Q <span className="text-brand-blue">OPTICAL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-[11px] font-bold tracking-[2px] transition-colors hover:text-brand-blue uppercase',
                location.pathname === link.href ? 'text-brand-blue' : (scrolled ? 'text-white' : 'text-white/80')
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={getWhatsAppLink(MAIN_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-brand-blue text-white text-[11px] font-black rounded-full hover:scale-105 transition-all"
          >
            <MessageSquare size={14} fill="currentColor" />
            +91 {MAIN_WHATSAPP}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-nav-toggle"
          className={cn(
            "lg:hidden transition-colors",
            scrolled || isOpen ? "text-white" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-premium-blue-dark border-b border-white/10 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-brand-blue"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4">
                <a
                  href={`tel:+917980757092`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                >
                  <Phone size={18} /> Call Us
                </a>
                <a
                  href={getWhatsAppLink(MAIN_WHATSAPP)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-blue rounded-lg text-white font-bold"
                >
                  <MessageSquare size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
