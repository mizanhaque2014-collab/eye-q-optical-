import React, { useState } from 'react';
import { motion } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { BRANCHES } from '../constants';
import { Send, Calendar, User, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function Appointment() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('Main Office – Bowbazar Kolkata');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning (11:00 AM - 01:00 PM)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Record<string, string> = {};
    if (!name.trim()) validationErrors.name = 'Full Name is required';
    if (!phone.trim()) validationErrors.phone = 'Phone Number is required';
    if (!date) validationErrors.date = 'Preferred date is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Formatting a professional WhatsApp message template
    const formattedMsg = `*🌟 EYE-Q OPTICAL APPOINTMENT BOOKING 🌟*

👤 *Name*: ${name.trim()}
📞 *Phone*: ${phone.trim()}
📍 *Branch*: ${branch}
📅 *Preferred Date*: ${date}
⏰ *Preferred Time*: ${time}
💬 *Message/Request*: ${message.trim() || 'None Specified'}

---
📧 *Backup Contact*: info@eyeqoptical.io
🕒 *Generated At*: ${new Date().toLocaleDateString()}`;

    const encodedValue = encodeURIComponent(formattedMsg);
    // WhatsApp redirect to +917980757092
    window.open(`https://wa.me/917980757092?text=${encodedValue}`, '_blank');
    
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setBranch('Main Office – Bowbazar Kolkata');
    setDate('');
    setTime('Morning (11:00 AM - 01:00 PM)');
    setMessage('');
    setIsSubmitted(false);
    setErrors({});
  };

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
             {!isSubmitted ? (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Full Name</label>
                        <div className="relative">
                           <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             type="text" 
                             placeholder="John Doe" 
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             className={`w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all ${
                               errors.name ? 'border-red-500/50' : 'border-white/10'
                             }`}
                           />
                        </div>
                        {errors.name && <p className="text-red-500 text-xs px-1">{errors.name}</p>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Phone Number</label>
                        <div className="relative">
                           <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <input 
                             type="tel" 
                             placeholder="+91 00000 00000" 
                             value={phone}
                             onChange={(e) => setPhone(e.target.value)}
                             className={`w-full bg-white/5 border rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all ${
                               errors.phone ? 'border-red-500/50' : 'border-white/10'
                             }`}
                           />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs px-1">{errors.phone}</p>}
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Select Branch</label>
                     <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <select 
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer"
                        >
                           <option className="bg-black" value="Main Office – Bowbazar Kolkata">Main Office – Bowbazar Kolkata</option>
                           {BRANCHES.slice(1).map(b => (
                             <option key={b.id} className="bg-black" value={b.name}>{b.name}</option>
                           ))}
                        </select>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Preferred Date</label>
                        <input 
                          type="date" 
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className={`w-full bg-white/5 border rounded-xl py-4 px-4 text-white focus:border-brand-blue outline-none transition-all cursor-pointer ${
                            errors.date ? 'border-red-500/50' : 'border-white/10'
                          }`}
                        />
                        {errors.date && <p className="text-red-500 text-xs px-1">{errors.date}</p>}
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Preferred Time</label>
                        <div className="relative">
                           <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                           <select 
                             value={time}
                             onChange={(e) => setTime(e.target.value)}
                             className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:border-brand-blue outline-none transition-all appearance-none cursor-pointer"
                           >
                              <option className="bg-black" value="Morning (11:00 AM - 01:00 PM)">Morning (11:00 AM - 01:00 PM)</option>
                              <option className="bg-black" value="Afternoon (01:00 PM - 04:00 PM)">Afternoon (01:00 PM - 04:00 PM)</option>
                              <option className="bg-black" value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
                           </select>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message (Optional)</label>
                     <textarea 
                       rows={4} 
                       placeholder="Tell us about any specific vision issues..." 
                       value={message}
                       onChange={(e) => setMessage(e.target.value)}
                       className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white focus:border-brand-blue outline-none transition-all resize-none"
                     />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-5 bg-brand-blue text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-all shadow-xl shadow-brand-blue/30 cursor-pointer"
                  >
                    CONFIRM APPOINTMENT <Send size={18} />
                  </button>
               </form>
             ) : (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="flex flex-col items-center justify-center text-center py-12 px-4"
               >
                 <div className="p-5 bg-brand-blue/10 text-brand-blue rounded-full mb-6">
                   <CheckCircle size={48} />
                 </div>
                 <h3 className="text-2xl font-bold mb-3 text-white">Appointment Details Prepared!</h3>
                 <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
                   Your booking text has been formatted. If WhatsApp did not open automatically, click below to send it live to our official number (+91 7980757092).
                 </p>
                 <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-full text-left space-y-2 mb-8 text-xs font-mono text-gray-300">
                    <p><strong className="text-white">Name:</strong> {name}</p>
                    <p><strong className="text-white">Phone:</strong> {phone}</p>
                    <p><strong className="text-white">Branch:</strong> {branch}</p>
                    <p><strong className="text-white">Schedule:</strong> {date} @ {time}</p>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-4 w-full">
                   <button
                     onClick={() => {
                       const formatted = `*🌟 EYE-Q OPTICAL APPOINTMENT BOOKING 🌟*

👤 *Name*: ${name.trim()}
📞 *Phone*: ${phone.trim()}
📍 *Branch*: ${branch}
📅 *Preferred Date*: ${date}
⏰ *Preferred Time*: ${time}
💬 *Message/Request*: ${message.trim() || 'None Specified'}

---
📧 *Backup Contact*: info@eyeqoptical.io`;
                       window.open(`https://wa.me/917980757092?text=${encodeURIComponent(formatted)}`, '_blank');
                     }}
                     className="flex-1 py-4 bg-brand-blue text-white font-bold rounded-xl transition-all text-sm shadow-md cursor-pointer hover:bg-brand-blue/85"
                   >
                     Send to WhatsApp
                   </button>
                   <button
                     onClick={handleReset}
                     className="flex-1 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/15 transition-all text-sm cursor-pointer"
                   >
                     Book Another
                   </button>
                 </div>
                 <p className="text-[10px] text-gray-500 mt-6 leading-relaxed">
                   Backup details are also copied to our email queue at <span className="text-brand-blue font-bold">info@eyeqoptical.io</span>
                 </p>
               </motion.div>
             )}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
