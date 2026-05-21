import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  dark?: boolean;
}

export default function Section({ children, className, id, containerClassName, dark = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        'py-24 relative overflow-hidden', 
        dark ? 'bg-premium-blue-dark' : 'bg-premium-blue',
        className
      )}
    >
      <div className={cn('max-w-7xl mx-auto px-6 relative z-10', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}: { 
  title: string; 
  subtitle?: string; 
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}) {
  return (
    <div className={cn(
      'mb-16',
      align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
    )}>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-brand-blue font-bold tracking-[2px] uppercase text-[11px] mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl md:text-6xl font-bold leading-[0.95] tracking-tighter",
          light ? "text-slate-400" : "text-white"
        )}
      >
        {title}
      </motion.h2>
      <div className={cn(
        "h-1 w-20 bg-brand-blue mt-6",
        align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''
      )} />
    </div>
  );
}
