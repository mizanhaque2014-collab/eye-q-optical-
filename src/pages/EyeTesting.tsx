import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { ShieldCheck, Activity, Target, Zap, Clock, Smartphone, Microscope, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EyeTesting() {
  return (
    <div id="eye-testing-page" className="pt-20 bg-black">
      {/* Hero Section */}
      <Section className="bg-luxury-black relative h-[70vh] flex items-center">
         <div className="absolute inset-0 opacity-20">
            <img 
               src="/src/assets/images/advanced_eye_testing_lab_1779176321332.png" 
               alt="Lab" 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
            />
         </div>
         <div className="relative z-10 max-w-3xl">
            <SectionTitle 
               title="Precision Diagnostic Vision Laboratory" 
               subtitle="Advanced Eye Testing" 
               align="left"
            />
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
               Empowering vision through science. Our diagnostic suite is equipped with world-class computerized instruments to provide the most accurate refractive errors and ocular health assessments in Kolkata.
            </p>
            <Link to="/appointment" className="px-10 py-4 bg-brand-blue text-white font-bold rounded-full inline-block">
               BOOK A TEST SESSION
            </Link>
         </div>
      </Section>

      {/* Equipment List */}
      <Section>
         <SectionTitle 
            title="Our Advanced Diagnostic Suite" 
            subtitle="The Technology" 
         />
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: 'Auto Refractometer', 
                desc: 'Digital measurement of eyes ability to focus light. Provides an objective starting point for prescription refinement.',
                icon: Target
              },
              { 
                title: 'Lensometer / Focimeter', 
                desc: 'High-precision verification of lens power and focal alignment for both new and old spectacles.',
                icon: Activity
              },
              { 
                title: 'Slit Lamp Examination', 
                desc: 'Bio-microscopic examination of the anterior and posterior segments of the eye to detect health issues.',
                icon: Microscope
              },
              { 
                title: 'Digital Vision Testing', 
                desc: 'Modern electronic Snellen and LogMAR charts for precise visual acuity measurement across different distances.',
                icon: Smartphone
              }
            ].map((tech, idx) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 p-10 bg-luxury-gray rounded-3xl border border-white/5 group hover:border-brand-blue/30 transition-all"
              >
                 <div className="w-16 h-16 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <tech.icon size={32} />
                 </div>
                 <div>
                    <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{tech.desc}</p>
                 </div>
              </motion.div>
            ))}
         </div>
      </Section>

      {/* Importance Section */}
      <Section className="bg-luxury-black border-t border-white/5">
         <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-10 text-brand-blue">
               <ShieldCheck size={40} />
            </div>
            <h2 className="text-4xl font-display mb-8">Why is a Professional Eye Test Important?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="space-y-4">
                  <div className="flex gap-3">
                     <Zap className="text-brand-blue shrink-0" size={20} />
                     <p className="text-sm text-gray-400">Regular tests detect early signs of glaucoma and cataracts.</p>
                  </div>
                  <div className="flex gap-3">
                     <Zap className="text-brand-blue shrink-0" size={20} />
                     <p className="text-sm text-gray-400">Prevents digital eye strain and chronic headaches.</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="flex gap-3">
                     <Zap className="text-brand-blue shrink-0" size={20} />
                     <p className="text-sm text-gray-400">Ensures your prescription is up-to-date for safe driving.</p>
                  </div>
                  <div className="flex gap-3">
                     <Zap className="text-brand-blue shrink-0" size={20} />
                     <p className="text-sm text-gray-400">Monitors children's vision development and progress.</p>
                  </div>
               </div>
            </div>
            <div className="mt-16 p-10 glass rounded-3xl inline-block">
               <p className="text-white font-bold mb-4">Recommended Testing Frequency</p>
               <div className="flex flex-wrap justify-center gap-10">
                  <div className="text-center">
                     <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Ages 5 - 18</p>
                     <p className="text-brand-blue font-bold">Every 1 Year</p>
                  </div>
                  <div className="text-center">
                     <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Ages 19 - 60</p>
                     <p className="text-brand-blue font-bold">Every 2 Years</p>
                  </div>
                  <div className="text-center">
                     <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Ages 60+</p>
                     <p className="text-brand-blue font-bold">Every 1 Year</p>
                  </div>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
}
