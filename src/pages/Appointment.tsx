import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { BRANCHES } from '../constants';
import { Send, Calendar, User, Phone, MapPin, Clock } from 'lucide-react';

export default function Appointment() {
  return (
    <div id="appointment-page" className="pt-20 min-h-screen bg-black">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionTitle 
              title="Prioritize Your Vision" 
              subtitle="Schedule an Eye Test" 
              align="left"
            />
            <p className="text-gray-400 mb-10 leading-loose">
              Regular eye examinations are essential for detecting early signs of vision changes and maintaining ocular health. Our computerized tests take approximately 15-20 minutes.
            </p>
            
            <div className="space-y-6">
               <div className="flex gap-4 p-6 bg-luxury-gray rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-brand-blue">
                     <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Fast Turnaround</h4>
                    <p className="text-xs text-gray-500">Pick your glasses on the same day for standard prescriptions.</p>
                  </div>
               </div>
               <div className="flex gap-4 p-6 bg-luxury-gray rounded-2xl border border-white/5">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-xl text-brand-blue">
                     <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Flexible Booking</h4>
                    <p className="text-xs text-gray-500">Available 7 days a week across all Kolkata locations.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-dark p-8 md:p-12 rounded-[40px] border-white/10"
          >
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                      <div className="relative">
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                         <input 
                           type="text" 
                           placeholder="John Doe" 
                           className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all"
                         />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Phone Number</label>
                      <div className="relative">
                         <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                         <input 
                           type="tel" 
                           placeholder="+91 00000 00000" 
                           className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all"
                         />
                      </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Select Branch</label>
                   <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer">
                         <option className="bg-black">Main Office – Bowbazar</option>
                         {BRANCHES.slice(1).map(b => (
                           <option key={b.id} className="bg-black">{b.name}</option>
                         ))}
                      </select>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Preferred Date</label>
                      <input 
                        type="date" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:border-brand-blue outline-none transition-all cursor-pointer"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Preferred Time</label>
                      <div className="relative">
                         <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                         <select className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer">
                            <option className="bg-black">Morning (11:00 AM - 01:00 PM)</option>
                            <option className="bg-black">Afternoon (01:00 PM - 04:00 PM)</option>
                            <option className="bg-black">Evening (04:00 PM - 08:00 PM)</option>
                         </select>
                      </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message (Optional)</label>
                   <textarea 
                     rows={4} 
                     placeholder="Tell us about any specific vision issues..." 
                     className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:border-brand-blue outline-none transition-all resize-none"
                   />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 bg-brand-blue text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-brand-blue/30"
                >
                  CONFIRM APPOINTMENT <Send size={18} />
                </button>
             </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
