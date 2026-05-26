import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { SERVICES } from '../constants';
import { 
  Monitor, Target, Search, Eye, Glasses, Sun, 
  Smartphone, ShieldCheck, Zap, HeartPulse, HardHat, PenTool
} from 'lucide-react';

const icons: Record<string, any> = {
  Monitor, Target, Search, Eye, Glasses, Sun, Smartphone, ShieldCheck, Zap, HeartPulse, HardHat, PenTool
};

const ALL_SERVICES = [
  ...SERVICES,
  { id: 'progressive', title: 'Progressive Lenses', description: 'Seamless vision for all distances without unsightly lines.', iconName: 'Target' },
  { id: 'blue-cut', title: 'Blue Cut Lenses', description: 'Superior protection against digital eye strain from screens.', iconName: 'Monitor' },
  { id: 'kids', title: 'Kids Eyewear', description: 'Durable, colorful, and comfortable frames for younger eyes.', iconName: 'Zap' },
  { id: 'repair', title: 'Frame Repair Services', description: 'Expert maintenance and precise alignment for your eyewear.', iconName: 'PenTool' },
  { id: 'anti-glare', title: 'Anti-Glare Lenses', description: 'Crystal clear vision by eliminating distracting reflections.', iconName: 'ShieldCheck' },
];

export default function Services() {
  return (
    <div id="services-page" className="pt-20">
      <Section className="bg-black">
        <SectionTitle 
          title="Vision Solutions for Modern Life" 
          subtitle="Our Services" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_SERVICES.map((service, idx) => {
            const Icon = icons[service.iconName] || Eye;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group p-10 bg-luxury-black rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-[50px] -mr-16 -mt-16 group-hover:bg-brand-blue/20 transition-all" />
                
                <div className="w-16 h-16 bg-luxury-gray text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Icon size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
                
                <div className="mt-8 h-[1px] w-full bg-white/5 group-hover:bg-brand-blue/20 transition-all" />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Specialty Section */}
      <Section className="bg-luxury-black border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="absolute inset-0 bg-brand-blue/20 blur-[80px]" />
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800" width={800} height={600} loading="lazy" 
                alt="Contact Lenses" 
                className="relative z-10 w-full rounded-3xl"
              />
           </div>
           <div>
              <SectionTitle 
                title="Specialized Contact Lens Clinic" 
                subtitle="Advanced Fitting" 
                align="left"
              />
              <p className="text-gray-400 mb-8 leading-loose">
                Not all eyes are the same. Our contact lens specialists provide personalized fitting sessions for daily disposables, monthly silicons, and specialized toric lenses for astigmatism.
              </p>
              <ul className="space-y-4">
                 {[
                   'Corneal Topography Mapping',
                   'Dry Eye Assessment',
                   'Brand Trial Packs Available',
                   'Proper Care & Hygiene Training'
                 ].map(item => (
                   <li key={item} className="flex gap-3 text-sm text-gray-300">
                      <Zap size={18} className="text-brand-blue" /> {item}
                   </li>
                 ))}
              </ul>
           </div>
        </div>
      </Section>
    </div>
  );
}
