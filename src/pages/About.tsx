import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { STORE_NAME, MAIN_ADDRESS } from '../constants';

export default function About() {
  return (
    <div id="about-page" className="pt-20">
      <Section className="bg-luxury-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6"
          >
            <SectionTitle 
              title="A Legacy of Visionary Care" 
              subtitle="About Eye-Q Optical" 
              align="left"
            />
            <p className="text-gray-400 leading-loose">
              Established with a vision to redefine eye care in Kolkata, Eye-Q Optical has grown from a single showroom to a multi-branch destination for premium eyewear and clinical diagnostics. 
            </p>
            <p className="text-gray-400 leading-loose">
              Our philosophy blends high-fashion aesthetics with medical-grade precision. We believe that eyewear is more than just a necessity—it's an extension of your personality. That's why we curate only the finest materials, from lightweight titanium to hand-crafted Italian acetate.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-6">
               <div>
                  <h4 className="text-4xl font-display text-brand-blue mb-1">15+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Years Experience</p>
               </div>
               <div>
                  <h4 className="text-4xl font-display text-brand-blue mb-1">20k+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Happy Eyes</p>
               </div>
               <div>
                  <h4 className="text-4xl font-display text-brand-blue mb-1">06</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Locations</p>
               </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 gap-4"
          >
            <img 
              src="https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800" width={600} height={800} 
              alt="Boutique Eyewear Display" 
              className="w-full aspect-[3/4] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="flex flex-col gap-4">
              <img 
                src="https://images.unsplash.com/photo-1511732351157-1865efeb9b7b?q=80&w=800" width={400} height={400} 
                alt="Curated Designer Eyewear Display" 
                className="w-full aspect-square object-cover rounded-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=800" width={400} height={400} 
                alt="Luxury Sunglasses Rack" 
                className="w-full aspect-square object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-black">
        <SectionTitle 
          title="Our Mission & Values" 
          subtitle="Why Choose Us" 
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Quality First', desc: 'We never compromise on lens quality or frame durability, ensuring long-term vision comfort.' },
            { title: 'Advanced Technology', desc: 'Continuous investment in computerized eye testing tools for surgical precision.' },
            { title: 'Personalized Styling', desc: 'Our consultants help you find the perfect frame shape that complements your face structure.' }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-luxury-gray rounded-3xl border border-white/5">
              <span className="text-4xl font-display text-brand-blue/20 mb-6 block">0{idx+1}</span>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
