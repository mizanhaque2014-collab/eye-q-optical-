import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { MAIN_WHATSAPP } from '../../constants';

export default function WhatsAppBtn() {
  return (
    <motion.a
      id="whatsapp-floating-btn"
      href={`https://wa.me/${MAIN_WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 text-white border-4 border-white/20 backdrop-blur-sm"
    >
      <MessageSquare size={32} fill="white" />
      <span className="absolute -top-12 right-0 bg-white text-black px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Need Help? Chat now
      </span>
    </motion.a>
  );
}
