import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Eye } from 'lucide-react';
import { STORE_NAME, BRANCHES, MAIN_PHONE, MAIN_WHATSAPP, MAIN_ADDRESS, NAV_LINKS } from '../../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-premium-blue-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-lg">
              <Eye className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              EYE-Q <span className="text-brand-blue">OPTICAL</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading vision care specialists in Kolkata. We provide premium quality frames, advanced eye testing, and professional eyewear solutions since inception.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/share/1AgN7Qq4SS/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Eye-Q Optical Primary Facebook"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.facebook.com/share/1FWjYT1wdz/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Eye-Q Optical Secondary Facebook"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Facebook size={18} className="opacity-85" />
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="Twitter"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Quick Navigation</h4>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-slate-400 hover:text-brand-blue text-sm transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Our Branches</h4>
          <ul className="flex flex-col gap-4">
            {BRANCHES.slice(0, 4).map((branch) => (
              <li key={branch.id}>
                <Link to="/branches" className="text-slate-400 hover:text-brand-blue text-sm transition-colors flex flex-col">
                  <span className="font-medium text-slate-300">{branch.name}</span>
                  <span className="text-xs opacity-70">{branch.address.split(',')[0]}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/branches" className="text-brand-blue text-xs font-bold uppercase tracking-widest hover:underline">
                View All Branches
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-widest text-xs uppercase">Contact Us</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-3 items-start">
              <MapPin size={20} className="text-brand-blue shrink-0 mt-1" />
              <span className="text-sm text-slate-400 leading-relaxed">
                {MAIN_ADDRESS}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={18} className="text-brand-blue shrink-0" />
              <span className="text-sm text-slate-400">{MAIN_PHONE}</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-brand-blue shrink-0" />
              <span className="text-sm text-slate-400">info@eyeqoptical.com</span>
            </li>
          </ul>
          <div className="mt-8">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-brand-blue/70 mb-1">Main Store Timing</p>
              <p className="text-sm font-bold text-white">Mon - Sat: 10:00 AM — 07:00 PM</p>
              <p className="text-xs text-slate-400 mt-1">Sunday Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-slate-400 text-[12px] font-medium">
          &copy; {currentYear} Eye-Q Optical India. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold tracking-[1px] uppercase text-slate-400">
          {BRANCHES.map(b => (
            <span key={b.id} className="hover:text-brand-blue cursor-default transition-colors">
              {b.name.split(' ').pop()}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
