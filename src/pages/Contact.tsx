import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import { 
  Phone, MessageSquare, Mail, MapPin, 
  Send, Briefcase, Upload, CheckCircle, Trash2, FileText
} from 'lucide-react';
import { MAIN_PHONE, MAIN_ADDRESS } from '../constants';

export default function Contact() {
  const [formType, setFormType] = useState<'message' | 'career'>('message');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Message Form State
  const [msgName, setMsgName] = useState('');
  const [msgEmail, setMsgEmail] = useState('');
  const [msgContent, setMsgContent] = useState('');

  // Career Form State
  const [careerName, setCareerName] = useState('');
  const [careerEmail, setCareerEmail] = useState('');
  const [careerPhone, setCareerPhone] = useState('');
  const [careerPosition, setCareerPosition] = useState('Optometrist');
  const [careerExperience, setCareerExperience] = useState('1 - 2 Years');
  const [careerDetails, setCareerDetails] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      setCvFile(files[0]);
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setCvFile(files[0]);
      setFormErrors(prev => ({ ...prev, cv: '' }));
    }
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!msgName.trim()) errors.name = 'Name is required';
    if (!msgEmail.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(msgEmail)) {
      errors.email = 'Invalid email address';
    }
    if (!msgContent.trim()) errors.message = 'Message is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitting(true);

    const formattedMsg = `*💬 EYE-Q OPTICAL GENERAL INQUIRY 💬*

👤 *Name*: ${msgName.trim()}
📧 *Email*: ${msgEmail.trim()}
✉️ *Message*: ${msgContent.trim()}

---
📧 *Backup Contact*: info@eyeqoptical.io
🕒 *Generated At*: ${new Date().toLocaleDateString()}`;

    const encodedValue = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/917980757092?text=${encodedValue}`, '_blank');

    setSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!careerName.trim()) errors.careerName = 'Name is required';
    if (!careerEmail.trim()) {
      errors.careerEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(careerEmail)) {
      errors.careerEmail = 'Invalid email address';
    }
    if (!careerPhone.trim()) errors.careerPhone = 'Phone number is required';
    if (!cvFile) errors.cv = 'Please upload your CV / Resume';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setSubmitting(true);

    const formattedMsg = `*💼 EYE-Q OPTICAL JOB APPLICATION 💼*

👤 *Applicant Name*: ${careerName.trim()}
📞 *Phone*: ${careerPhone.trim()}
📧 *Email*: ${careerEmail.trim()}
🎯 *Target Position*: ${careerPosition}
⏳ *Total Experience*: ${careerExperience}
📄 *Resume/CV Document*: [Attached CV Document: ${cvFile ? cvFile.name : 'Unknown.pdf'}]
📝 *Professional Summary*: ${careerDetails.trim() || 'None Specified'}

---
📧 *Backup Contact*: info@eyeqoptical.io
🕒 *Generated At*: ${new Date().toLocaleDateString()}`;

    const encodedValue = encodeURIComponent(formattedMsg);
    window.open(`https://wa.me/917980757092?text=${encodedValue}`, '_blank');

    setSubmitting(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMsgName('');
    setMsgEmail('');
    setMsgContent('');
    setCareerName('');
    setCareerEmail('');
    setCareerPhone('');
    setCareerDetails('');
    setCvFile(null);
    setFormErrors({});
  };

  return (
    <div id="contact-page" className="pt-20 bg-black">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionTitle 
              title="We're Here to Help" 
              subtitle="Connect With Us" 
              align="left"
            />
            <p className="text-gray-400 mb-12 leading-loose">
              Whether you need to check frame availability, clarify a prescription, search for career opportunities as an optometrist or sales consultant, our team is ready to assist you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="p-8 bg-luxury-gray rounded-3xl border border-white/5">
                  <Phone className="text-brand-blue mb-6" size={32} />
                  <h4 className="text-white font-bold mb-2">Direct Call</h4>
                  <p className="text-gray-500 text-sm mb-4">Available 10 AM - 9 PM</p>
                  <a href={`tel:${MAIN_PHONE}`} className="text-white font-bold hover:text-brand-blue transition-colors">{MAIN_PHONE}</a>
               </div>
               <div className="p-8 bg-luxury-black rounded-3xl border border-white/5 blue-glow">
                  <MessageSquare className="text-brand-blue mb-6" size={32} />
                  <h4 className="text-white font-bold mb-2">WhatsApp Chat</h4>
                  <p className="text-gray-500 text-sm mb-4">Instant expert inquiry</p>
                  <a href="https://wa.me/917980757092" target="_blank" rel="noreferrer" className="text-white font-bold hover:text-brand-blue transition-colors">Start Chat</a>
               </div>
            </div>

            <div className="space-y-6">
                 <div className="flex gap-4">
                    <MapPin className="text-brand-blue shrink-0" />
                    <div className="text-sm text-gray-400">
                       <p className="text-white font-bold mb-1">Corporate Office</p>
                       <p>{MAIN_ADDRESS}</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <Mail className="text-brand-blue shrink-0" />
                    <div className="text-sm text-gray-400">
                       <p className="text-white font-bold mb-1">Email Inquiry</p>
                       <p>info@eyeqoptical.io</p>
                    </div>
                 </div>
            </div>
          </div>

          <div className="bg-luxury-gray p-8 sm:p-10 rounded-[40px] border border-white/5 relative overflow-hidden flex flex-col justify-between min-h-[620px]">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] -mr-32 -mt-32" />
             
             {!isSubmitted ? (
                <div className="relative z-10 space-y-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">
                      {formType === 'message' ? 'Send a Message' : 'Career Opportunities'}
                    </h3>
                  </div>

                  {/* Interactive Form Switcher */}
                  <div className="flex bg-black/60 p-1.5 rounded-2xl border border-white/5">
                    <button
                      type="button"
                      onClick={() => { setFormType('message'); setFormErrors({}); }}
                      className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${
                        formType === 'message'
                          ? 'bg-white text-black shadow-lg'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <MessageSquare size={14} /> Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => { setFormType('career'); setFormErrors({}); }}
                      className={`flex-1 py-3 text-xs font-bold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 ${
                        formType === 'career'
                          ? 'bg-white text-black shadow-lg shadow-black/40'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <Briefcase size={14} /> Job & CV Submit
                    </button>
                  </div>

                  <AnimatePresence mode="wait">
                    {formType === 'message' ? (
                      <motion.form 
                        key="message-form"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={handleMessageSubmit} 
                        className="space-y-5 flex-1 flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          <div className="space-y-1">
                             <input 
                               type="text" 
                               placeholder="Your Name" 
                               value={msgName}
                               onChange={(e) => setMsgName(e.target.value)}
                               className={`w-full bg-black/40 border rounded-xl py-4 px-6 text-white outline-none transition-colors ${
                                 formErrors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                               }`}
                             />
                             {formErrors.name && <p className="text-red-500 text-xs px-2">{formErrors.name}</p>}
                          </div>
                          <div className="space-y-1">
                             <input 
                               type="email" 
                               placeholder="Email Address" 
                               value={msgEmail}
                               onChange={(e) => setMsgEmail(e.target.value)}
                               className={`w-full bg-black/40 border rounded-xl py-4 px-6 text-white outline-none transition-colors ${
                                 formErrors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                               }`}
                             />
                             {formErrors.email && <p className="text-red-500 text-xs px-2">{formErrors.email}</p>}
                          </div>
                          <div className="space-y-1">
                             <textarea 
                               rows={4} 
                               placeholder="How can we help you?" 
                               value={msgContent}
                               onChange={(e) => setMsgContent(e.target.value)}
                               className={`w-full bg-black/40 border rounded-xl py-4 px-6 text-white outline-none resize-none transition-colors ${
                                 formErrors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                               }`}
                             />
                             {formErrors.message && <p className="text-red-500 text-xs px-2">{formErrors.message}</p>}
                          </div>
                        </div>

                        <button 
                          type="submit"
                          disabled={submitting}
                          className="w-full mt-6 py-5 bg-white text-black font-bold rounded-xl hover:bg-brand-blue hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {submitting ? 'SENDING...' : 'SEND MESSAGE'} <Send size={18} />
                        </button>
                      </motion.form>
                    ) : (
                      <motion.form 
                        key="career-form"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={handleCareerSubmit} 
                        className="space-y-4 flex-1 flex flex-col justify-between"
                      >
                        <div className="space-y-4 overflow-y-auto max-h-[420px] pr-1 scrollbar-thin">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                               <input 
                                 type="text" 
                                 placeholder="Full Name" 
                                 value={careerName}
                                 onChange={(e) => setCareerName(e.target.value)}
                                 className={`w-full bg-black/40 border rounded-xl py-3.5 px-5 text-white outline-none text-sm transition-colors ${
                                   formErrors.careerName ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                                 }`}
                               />
                               {formErrors.careerName && <p className="text-red-500 text-xs px-2">{formErrors.careerName}</p>}
                            </div>
                            <div className="space-y-1">
                               <input 
                                 type="text" 
                                 placeholder="Phone Number" 
                                 value={careerPhone}
                                 onChange={(e) => setCareerPhone(e.target.value)}
                                 className={`w-full bg-black/40 border rounded-xl py-3.5 px-5 text-white outline-none text-sm transition-colors ${
                                   formErrors.careerPhone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                                 }`}
                               />
                               {formErrors.careerPhone && <p className="text-red-500 text-xs px-2">{formErrors.careerPhone}</p>}
                            </div>
                          </div>

                          <div className="space-y-1">
                             <input 
                               type="email" 
                               placeholder="Email Address" 
                               value={careerEmail}
                               onChange={(e) => setCareerEmail(e.target.value)}
                               className={`w-full bg-black/40 border rounded-xl py-3.5 px-5 text-white outline-none text-sm transition-colors ${
                                 formErrors.careerEmail ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-brand-blue'
                               }`}
                             />
                             {formErrors.careerEmail && <p className="text-red-500 text-xs px-2">{formErrors.careerEmail}</p>}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold tracking-widest text-[#64748b] ml-1">Applying Position</label>
                              <select 
                                value={careerPosition}
                                onChange={(e) => setCareerPosition(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white outline-none text-sm focus:border-brand-blue"
                              >
                                <option value="Optometrist">Clinical Optometrist</option>
                                <option value="Sales Consultant">Sales & Showroom Consultant</option>
                                <option value="Store Manager">Store Manager</option>
                                <option value="Ophthalmic Assistant">Ophthalmic Assistant</option>
                                <option value="Other">Other / Administration</option>
                              </select>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[10px] uppercase font-bold tracking-widest text-[#64748b] ml-1">Total Experience</label>
                              <select 
                                value={careerExperience}
                                onChange={(e) => setCareerExperience(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white outline-none text-sm focus:border-brand-blue"
                              >
                                <option value="Fresher / Entry Level">Fresher / Entry Level</option>
                                <option value="1 - 2 Years">1 - 2 Years</option>
                                <option value="3 - 5 Years">3 - 5 Years</option>
                                <option value="5+ Years">5+ Years</option>
                              </select>
                            </div>
                          </div>

                          {/* Custom Beautiful Drag & Drop File Selector */}
                          <div className="space-y-1">
                            <label className="text-[10px] uppercase font-bold tracking-widest text-[#64748b] ml-1">Submit CV / Resume</label>
                            {!cvFile ? (
                              <div
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                                className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                                  isDragging 
                                    ? 'border-brand-blue bg-brand-blue/10' 
                                    : formErrors.cv 
                                      ? 'border-red-500/30 hover:border-red-500/60 bg-red-500/5' 
                                      : 'border-white/10 hover:border-white/20 bg-black/20'
                                }`}
                              >
                                <input 
                                  type="file" 
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  className="hidden" 
                                />
                                <Upload className={`${formErrors.cv ? 'text-red-400' : 'text-brand-blue'} animate-bounce-slow`} size={24} />
                                <div className="text-xs">
                                  <p className="text-white font-medium">Click to upload or drag & drop</p>
                                  <p className="text-[#64748b] mt-0.5">Supports PDF, DOC, DOCX up to 10MB</p>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <div className="flex items-center gap-3">
                                  <div className="p-2 bg-brand-blue/10 rounded-xl">
                                    <FileText className="text-brand-blue" size={20} />
                                  </div>
                                  <div className="text-xs max-w-[200px] sm:max-w-xs">
                                    <p className="text-white font-medium truncate">{cvFile.name}</p>
                                    <p className="text-[#64748b] font-mono">{(cvFile.size / 1024 / 1024).toFixed(2)} MB</p>
                                  </div>
                                </div>
                                <button 
                                  type="button" 
                                  onClick={handleRemoveFile} 
                                  className="p-2 text-gray-400 hover:text-red-400 hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            )}
                            {formErrors.cv && <p className="text-red-500 text-xs px-2">{formErrors.cv}</p>}
                          </div>

                          <div className="space-y-1">
                             <textarea 
                               rows={2}
                               placeholder="Key skills or professional summary..." 
                               value={careerDetails}
                               onChange={(e) => setCareerDetails(e.target.value)}
                               className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-5 text-white outline-none text-sm resize-none focus:border-brand-blue"
                             />
                          </div>
                        </div>

                        <div className="space-y-3 mt-2 w-full">
                          <p className="text-xs text-gray-400 leading-relaxed text-center px-2">
                            💡 <strong className="text-brand-blue">Notice</strong>: Clicking submit will open WhatsApp. Please attach your CV file directly in the chat window that opens.
                          </p>
                          <button 
                            type="submit"
                            disabled={submitting}
                            className="w-full py-4.5 bg-brand-blue text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-brand-blue/20"
                          >
                            {submitting ? 'SENDING APPLICATION...' : 'SUBMIT CV & DETAILS'} <Send size={18} />
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
             ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative z-10 flex flex-col items-center justify-center text-center py-12 px-4 h-full my-auto"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="p-5 bg-brand-blue/10 text-brand-blue rounded-full mb-6"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {formType === 'message' ? 'Inquiry Submitted!' : 'Application Received!'}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
                    {formType === 'message' 
                      ? "Thank you for reaching out to Eye-Q Optical. We have routed your general inquiry to WhatsApp. Backup copy is saved for review; support response target is within 24 hours."
                      : `Thank you for your interest in joining Eye-Q Optical as a ${careerPosition}. We have opened WhatsApp to transmit your job inquiry with CV document placeholder (${cvFile?.name}). Please upload your real CV file there.`
                    }
                  </p>
                  <p className="text-[10px] text-gray-500 mb-8 leading-relaxed">
                    Backup verification has also been routed to our clinical desk at <span className="text-brand-blue font-bold">info@eyeqoptical.io</span>
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all text-sm shadow-md cursor-pointer"
                  >
                    {formType === 'message' ? 'Send Another Message' : 'Apply for Another Role'}
                  </button>
                </motion.div>
             )}
          </div>
        </div>
      </Section>
    </div>
  );
}
