import { MapPin, Phone, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { BRANCHES } from '../constants';

export default function Branches() {
  return (
    <div id="branches-page" className="pt-20 bg-premium-blue">
      <Section>
        <SectionTitle 
          title="Presence Across West Bengal" 
          subtitle="Branch Locations" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {BRANCHES.map((branch, idx) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row group hover:border-brand-blue/30 shadow-2xl transition-all duration-500"
            >
              <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                <img 
                  src={branch.image} 
                  alt={branch.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-blue text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  ACTIVE
                </div>
              </div>
              
              <div className="flex-1 p-8 flex flex-col justify-between">
                <div>
                   <h3 className="text-2xl font-display font-medium text-white mb-4 group-hover:text-brand-blue transition-colors">{branch.name}</h3>
                   <div className="space-y-4 text-sm text-slate-400">
                      <div className="flex gap-3">
                         <MapPin size={18} className="text-brand-blue shrink-0" />
                         <span>{branch.address}</span>
                      </div>
                      <div className="flex gap-3">
                         <Clock size={18} className="text-brand-blue shrink-0" />
                         <span>{branch.timing}</span>
                      </div>
                   </div>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                   <a 
                     href={`tel:${branch.phone}`}
                     className="flex-1 min-w-[120px] py-3 bg-white/5 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                   >
                     <Phone size={14} /> CALL
                   </a>
                   <a 
                     href={`https://wa.me/91${branch.whatsapp}`}
                     className="flex-1 min-w-[120px] py-3 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all shadow-lg"
                   >
                     <MessageSquare size={14} /> WHATSAPP
                   </a>
                   <button className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Simple Map Placeholder */}
      <Section className="p-0">
         <div className="h-[500px] w-full bg-premium-blue-dark relative overflow-hidden flex items-center justify-center border-y border-white/5">
            <div className="absolute inset-0 opacity-20 pointer-events-none grayscale invert" style={{ 
               backgroundImage: 'url("https://www.google.com/maps/vt/pb=!1m5!1m4!1i11!2i1356!3i878!4i256!2m3!1e0!2sm!3i667104192!3m8!2sen!3sin!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!5f2")',
               backgroundSize: 'cover'
            }} />
            <div className="relative z-10 glass bg-white/5 backdrop-blur-xl p-10 rounded-3xl text-center max-w-md border border-white/10 shadow-2xl">
               <MapPin size={48} className="text-brand-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Locator</h3>
                <p className="text-slate-400 text-sm mb-6">Our branches are strategically located across Kolkata to serve you better. Click below to open in Google Maps.</p>
                <a 
                  href="https://www.google.com/maps" 
                  target="_blank" 
                  className="px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:brightness-110 transition-all inline-block shadow-lg"
                >
                  OPEN MAPS
                </a>
            </div>
         </div>
      </Section>
    </div>
  );
}
