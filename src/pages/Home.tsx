import { motion, useScroll, useTransform } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  ChevronRight, 
  Monitor, 
  Target, 
  Search, 
  Eye, 
  Glasses, 
  Sun,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Section, { SectionTitle } from '../components/UI/Section';
import { MAIN_WHATSAPP, SERVICES, BRANCHES, PRODUCTS, TESTIMONIALS } from '../constants';
import { getWhatsAppLink } from '../lib/utils';

// Hero Section
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div id="hero" className="relative min-h-screen md:h-screen w-full overflow-hidden bg-premium-blue">
      {/* Background Image with Parallax and Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          style={{ y }}
          src="/assets/images/luxury_optical_showroom_hero_1779176289085.png" 
          alt="Luxury Optical Showroom" 
          className="w-full h-[120%] object-cover opacity-50 -top-[10%] relative"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered Gradient to protect text and brand name - Premium Blue Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-premium-blue via-premium-blue/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-blue via-transparent to-premium-blue/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen md:h-full flex flex-col justify-start md:justify-center pt-40 md:pt-36 lg:pt-40 pb-16 md:pb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-blue font-bold tracking-[3px] uppercase text-[12px] md:text-sm mb-6"
          >
            Luxury Vision in Kolkata
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-[92px] font-bold text-white mb-8 leading-[1.1] md:leading-[1] tracking-tight"
          >
            Premium Vision<br />
            & Luxury Eyewear
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Experience advanced computerized eye testing and an exclusive collection of international designer frames at Kolkata's premier boutique showroom.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link 
              to="/appointment" 
              className="px-8 py-4 bg-brand-blue text-white text-sm font-bold rounded-sm hover:brightness-110 transition-all uppercase tracking-wider text-center"
            >
              Book Eye Test
            </Link>
            <Link 
              to="/products" 
              className="px-8 py-4 border border-white/20 text-white text-sm font-bold rounded-sm hover:bg-white hover:text-slate-900 transition-all uppercase tracking-wider text-center"
            >
              Explore Frames
            </Link>
          </motion.div>

          <div className="flex justify-center md:justify-start gap-8 md:gap-12 mt-16">
             <div className="flex flex-col text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-brand-blue">15+</span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748b] mt-1">Expert Years</span>
             </div>
             <div className="flex flex-col text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-brand-blue">6</span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748b] mt-1">Kolkata Branches</span>
             </div>
             <div className="flex flex-col text-center md:text-left">
                <span className="text-2xl md:text-3xl font-bold text-brand-blue">50k+</span>
                <span className="text-[10px] uppercase tracking-widest text-[#64748b] mt-1">Happy Eyes</span>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Main Glass Card Visual - Hidden on mobile, shown on desktop */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-10 w-[350px] h-[450px] hidden xl:flex z-10"
      >
        <div className="glass w-full h-full rounded-[24px] p-8 flex flex-col justify-between shadow-2xl bg-white/5 border-white/10">
          <div>
            <h3 className="text-xl font-bold mb-3 tracking-tight text-white">Clinical Excellence</h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">Equipped with Zeiss & Essilor precision instruments for the perfect fit.</p>
            
            <div className="grid grid-cols-2 gap-2">
               {[
                 'Auto Refractometer', 'Digital Lensometer', 
                 'Contact Lens Fitting', 'Frame Repair',
                 'Progressive Lenses', 'Blue Cut Shield'
               ].map(item => (
                 <div key={item} className="p-2.5 bg-white/5 border border-white/5 rounded-lg text-[10px] text-center text-slate-300 font-medium whitespace-nowrap">
                    {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
             <div className="text-[10px] mb-2 text-white font-bold tracking-wider uppercase">Main Office: Bowbazar</div>
             <p className="text-[10px] text-slate-400 leading-relaxed">
                64 Metcalf Street, Sabir Residency<br />
                Room 104, Kolkata 700013
             </p>
             <div className="mt-4 text-[12px] font-bold text-brand-blue">CALL: +91 7980757092</div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-10"
      >
        <div className="w-[1px] h-8 bg-slate-400" />
        <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-slate-600">Scroll</span>
      </motion.div>
    </div>
  );
}

// Services Grid
function Services() {
  const icons: Record<string, any> = {
    Monitor, Target, Search, Eye, Glasses, Sun
  };

  return (
    <Section id="services">
      <SectionTitle 
        title="Comprehensive Eye Care" 
        subtitle="Our Expert Services" 
        align="left"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, idx) => {
          const Icon = icons[service.iconName] || Eye;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-blue/30 shadow-lg transition-all hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
              <Link to="/services" className="text-brand-blue text-xs font-bold uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                Read More <ChevronRight size={14} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

// Product Showcase
function ProductHighlight() {
  return (
    <Section id="products">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 blur-[100px] rounded-full" />
            <img 
              src="/assets/images/premium_designer_frames_1779176306036.png" 
              alt="Premium Product" 
              className="relative z-10 w-full rounded-3xl border border-slate-200 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div>
            <SectionTitle 
              title="Curation of Luxury" 
              subtitle="The Eyewear Collection" 
              align="left"
            />
            <p className="text-slate-400 mb-8 leading-loose">
              Explore our handpicked selection of international designer labels and premium house brands. From timeless classics to futuristic minimalism, every frame in our collection is chosen for its superior craftsmanship and distinctive aesthetic.
            </p>
            <div className="space-y-4 mb-10">
              {['Titanium & Carbon Fiber', 'Hand-crafted Acetate', 'Anti-Reflective Lenses', 'Blue-Light Protection'].map((feature) => (
                <div key={feature} className="flex gap-3 items-center">
                  <CheckCircle2 size={18} className="text-brand-blue" />
                  <span className="text-slate-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <Link to="/products" className="inline-block px-10 py-4 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all">
              VIEW FULL CATALOGUE
            </Link>
          </div>
       </div>
    </Section>
  );
}

// Testimonials Section
function Testimonials() {
  return (
    <Section>
      <SectionTitle 
        title="Stories of Clear Vision" 
        subtitle="Customer Experiences" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[32px] bg-white/5 border border-white/10 flex flex-col justify-between shadow-lg"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                ))}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-12 h-12 rounded-full object-cover border border-brand-blue/30"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                <p className="text-brand-blue/60 text-[10px] uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// Store Interior Gallery
function StoreGallery() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <SectionTitle 
            title="A Modern Optical Experience" 
            subtitle="Store Interior" 
            align="left"
          />
          <p className="text-slate-400 mb-8 leading-relaxed text-lg">
            Step into a world of curated elegance. Our showrooms are designed to be more than just stores—they are galleries of light and style where you can comfortably find your perfect vision match.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
              <h4 className="text-white font-bold mb-2">Minimalist Design</h4>
              <p className="text-xs text-slate-400">Clutter-free environment for focused selection.</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg">
              <h4 className="text-white font-bold mb-2">Glow Lighting</h4>
              <p className="text-xs text-slate-400">Precision lighting to highlight every frame detail.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 aspect-[16/9] overflow-hidden rounded-3xl border border-slate-100"
          >
            <img 
              src="/assets/images/modern_optical_display_wall_1779177828358.png" 
              alt="Gallery Wall" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-square overflow-hidden rounded-3xl border border-slate-100"
          >
            <img 
              src="/assets/images/luxury_optical_showroom_hero_1779176289085.png" 
              alt="Showroom" 
              className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square overflow-hidden rounded-3xl border border-slate-100"
          >
            <img 
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800" 
              alt="Testing" 
              className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// Eye Testing Equipment
function EquipmentSection() {
  return (
    <Section className="relative overflow-hidden">
       {/* Decorative tech grid */}
       <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }} />
       
       <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
             <div className="absolute inset-0 bg-brand-blue/10 blur-[80px] rounded-full" />
             <img 
              src="/assets/images/advanced_eye_testing_lab_1779176321332.png" 
              alt="Advanced Equipment" 
              className="relative z-10 w-full rounded-[40px] border border-brand-blue/20 shadow-2xl blue-glow"
              referrerPolicy="no-referrer"
            />
            {/* Overlay indicators for a "hi-tech" feel */}
            <div className="hidden md:block absolute top-[10%] left-[10%] z-20 glass bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 scale-75 lg:scale-100">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">Auto Refractometer</span>
               </div>
               <p className="text-[9px] text-slate-400">Precision: ±0.01D</p>
            </div>
            <div className="hidden md:block absolute bottom-[15%] right-[10%] z-20 glass bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 scale-75 lg:scale-100">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">Digital Lensometer</span>
               </div>
               <p className="text-[9px] text-slate-400">Smart Focal Detection</p>
            </div>
          </motion.div>
          
          <div className="flex-1">
            <SectionTitle 
              title="State-of-the-Art Clinical Lab" 
              subtitle="The Diagnostics" 
              align="left"
            />
            <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
              Precision is the cornerstone of our practice. We use hospital-grade diagnostic instruments from Zeiss and Essilor to map your vision with atomic accuracy, ensuring your final lenses are perfectly synchronized with your eyes.
            </p>
            
            <div className="space-y-4">
               {[
                 { title: 'Computerized Auto-Refraction', icon: Target, desc: 'Ultra-fast infrared measurement of refractive power.' },
                 { title: 'High-Res Slit Lamp Biomicroscopy', icon: Microscope, desc: 'Detailed 3D analysis of the ocular anatomy.' }
               ].map((item, idx) => (
                 <motion.div 
                   key={item.title}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   viewport={{ once: true }}
                   className="flex gap-5 p-6 bg-white/5 border border-white/10 hover:border-brand-blue/20 transition-all shadow-lg"
                 >
                    <div className="w-12 h-12 shrink-0 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue">
                       <item.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                       <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
       </div>
    </Section>
  );
}

// Branches Preview
function BranchesPreview() {
  return (
    <Section>
      <SectionTitle 
        title="Find an Eye-Q Near You" 
        subtitle="Our Store Locations" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BRANCHES.slice(0, 3).map((branch, idx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-lg"
          >
            <img 
              src={branch.image} 
              alt={branch.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-2 text-brand-blue">
                <MapPin size={16} />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">KOLKATA</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 leading-tight">{branch.name}</h4>
              <p className="text-slate-200 text-xs mb-4 line-clamp-1">{branch.address}</p>
              <Link 
                to="/branches" 
                className="w-full py-3 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-blue transition-colors"
              >
                GET DETAILS
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link to="/branches" className="text-slate-500 hover:text-brand-blue transition-all text-sm font-medium underline underline-offset-8 decoration-brand-blue/50">
          VIEW ALL 6 LOCATIONS IN WEST BENGAL
        </Link>
      </div>
    </Section>
  );
}

// WhatsApp CTA
function WhatsAppCTA() {
  return (
    <Section className="bg-premium-blue-dark pb-32">
       <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tighter">Expert Optical Advice <br />Whenever You Need It.</h2>
             <p className="text-blue-100 mb-8 opacity-90 leading-relaxed">Have a question about your vision or need to check frame availability? Speak to our specialists directly on WhatsApp for an instant consultation.</p>
             <div className="flex flex-wrap gap-4">
                <a 
                  href={getWhatsAppLink(MAIN_WHATSAPP)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-brand-blue font-bold rounded-full flex items-center gap-2 hover:scale-105 transition-all shadow-xl"
                >
                  <MessageSquare size={20} fill="currentColor" /> CHAT NOW
                </a>
                <Link 
                  to="/appointment"
                  className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                >
                  BOOK APPOINTMENT
                </Link>
             </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-white/10 rounded-full border border-white/20"
          >
             <MessageSquare size={80} className="text-white opacity-40" />
          </motion.div>
       </div>
    </Section>
  );
}

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eye-Q Optical",
    "telephone": "+917980757092",
    "priceRange": "$$",
    "image": "https://www.eyeqoptical.io/assets/images/luxury_optical_showroom_hero_1779176289085.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "64 Metcalf Street, Sabir Residency, Room No. 104, Bowbazar",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "postalCode": "700013",
      "addressCountry": "IN"
    },
    "url": "https://www.eyeqoptical.io"
  };

  return (
    <div id="home-page">
      <Helmet>
        <title>Premium Vision Care & Luxury Eyewear Kolkata | Eye-Q Optical</title>
        <meta name="description" content="Experience advanced computerized eye testing & exclusive international designer frames at Kolkata's premier boutique optical showroom in West Bengal." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <ProductHighlight />
      <Testimonials />
      <StoreGallery />
      <EquipmentSection />
      <BranchesPreview />
      <WhatsAppCTA />
    </div>
  );
}

