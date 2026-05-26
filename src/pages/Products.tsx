import { motion, AnimatePresence } from 'motion/react';
import Section, { SectionTitle } from '../components/UI/Section';
import Modal from '../components/UI/Modal';
import { PRODUCTS, MAIN_WHATSAPP } from '../constants';
import { ShoppingBag, ChevronRight, Eye, Heart, X, MessageSquare, CheckCircle2, Facebook, Twitter, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Product } from '../types';
import { getWhatsAppLink } from '../lib/utils';

const CATEGORIES = ['All', 'Frames', 'Sunglasses', 'Contact Lenses', 'Computer Glasses', 'Kids'];

export default function Products() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const filteredProducts = activeTab === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeTab);

  const openQuickView = (product: Product) => {
    setSelectedProduct(product);
    setActiveImage(product.image);
    setIsModalOpen(true);
  };

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/products` : '';
  const shareText = selectedProduct 
    ? `Check out this stunning ${selectedProduct.name} from Eye-Q Optical!` 
    : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    whatsapp: getWhatsAppLink('', shareText + ' ' + shareUrl)
  };

  return (
    <div id="products-page" className="pt-20 bg-premium-blue min-h-screen">
      <Section>
        <SectionTitle 
          title="Curated Eyewear Gallery" 
          subtitle="Explore Collection" 
        />
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all ${
                activeTab === cat 
                ? 'bg-brand-blue text-white shadow-lg' 
                : 'bg-white/5 text-slate-400 hover:text-white border border-white/10 shadow-sm'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {filteredProducts.map((product, idx) => (
             <motion.div
               key={product.id}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.05 }}
               className="group relative"
             >
                <div className="aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group-hover:border-brand-blue/30 transition-all mb-6 relative cursor-pointer shadow-lg hover:shadow-2xl" onClick={() => openQuickView(product)}>
                   <img 
                     src={product.image} width={400} height={400} loading="lazy" 
                    alt={`${product.name} - Luxury Eyewear Boutique Eye-Q Optical Kolkata`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-blue transition-colors shadow-lg">
                         <Heart size={18} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); openQuickView(product); }}
                        className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-brand-blue transition-colors shadow-lg"
                      >
                         <Eye size={18} />
                      </button>
                   </div>
                   {product.isPremium && (
                     <div className="absolute bottom-4 left-4 bg-brand-blue px-3 py-1 rounded-full text-[8px] font-bold tracking-widest text-white uppercase shadow-lg">
                        PREMIUM
                     </div>
                   )}
                </div>
                
                <div className="flex justify-between items-center px-2">
                   <div className="cursor-pointer" onClick={() => openQuickView(product)}>
                      <p className="text-[10px] text-brand-blue font-bold uppercase tracking-widest mb-1">{product.category}</p>
                      <h4 className="text-lg font-bold text-white mb-2">{product.name}</h4>
                   </div>
                   <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white shadow-sm hover:shadow-md transition-all">
                      <ShoppingBag size={20} />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-32 text-center text-slate-400 uppercase tracking-widest text-sm">
             No products found in this category.
          </div>
        )}
      </Section>

      {/* Quick View Modal Content */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col bg-slate-900 border-r border-white/5 pb-6">
              <div className="bg-slate-950 aspect-square overflow-hidden relative">
                <motion.img 
                  key={activeImage || selectedProduct.image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={activeImage || selectedProduct.image} 
                  alt={`${selectedProduct.name} - Luxury Eyewear Boutique Eye-Q Optical Kolkata`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Product Gallery Angles / Colors */}
              {selectedProduct.gallery && selectedProduct.gallery.length > 0 && (
                <div className="mt-6 px-6">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-3">
                    Angles & Variations
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProduct.gallery.map((imgUrl, gIdx) => (
                      <button
                        key={gIdx}
                        onClick={() => setActiveImage(imgUrl)}
                        className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                          (activeImage || selectedProduct.image) === imgUrl
                            ? 'border-brand-blue scale-105 shadow-md'
                            : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                        }`}
                      >
                        <img 
                          src={imgUrl} 
                          alt={`${selectedProduct.name} View ${gIdx + 1} - Luxury Eyewear Boutique Eye-Q Optical Kolkata`} 
                          width={64}
                          height={64}
                          className="w-full h-full object-cover animate-fade-in"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
             <div className="p-8 md:p-12 flex flex-col justify-center bg-premium-blue-dark">
              <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold tracking-widest uppercase mb-4 rounded-full">
                {selectedProduct.category}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter leading-none">
                {selectedProduct.name}
              </h2>
              {selectedProduct.isPremium && (
                <div className="flex items-center gap-2 text-brand-blue mb-6">
                  <CheckCircle2 size={16} />
                  <span className="text-xs font-bold uppercase tracking-widest">Premium Selection</span>
                </div>
              )}
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Designed for those who appreciate the finer details. This piece from our {selectedProduct.category.toLowerCase()} collection combines lightweight comfort with high-end luxury aesthetics.
              </p>

              {/* Social Sharing */}
              <div className="mb-8 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Share2 size={14} className="text-brand-blue" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Share Piece</span>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={shareLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white shadow-sm transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href={shareLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white shadow-sm transition-all"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href={shareLinks.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:text-white shadow-sm transition-all"
                  >
                    <MessageSquare size={18} />
                  </a>
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                {['UV400 Protection', 'Scratch Resistant', 'Anti-Reflective Coating'].map((feat) => (
                  <div key={feat} className="flex items-center gap-3 text-xs text-slate-600">
                    <div className="w-1 h-1 bg-brand-blue rounded-full" />
                    {feat}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={getWhatsAppLink(MAIN_WHATSAPP, `Hi, I am interested in ${selectedProduct.name} from your ${selectedProduct.category} collection.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-4 bg-brand-blue text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:brightness-110 transition-all uppercase tracking-widest shadow-lg"
                >
                  <MessageSquare size={16} fill="currentColor" />
                  Inquire via WhatsApp
                </a>
                <button className="flex-1 px-8 py-4 border border-slate-200 text-slate-900 text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest">
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Brand Partners */}
      <Section className="bg-premium-blue-dark border-t border-white/5 py-16">
         <p className="text-center text-slate-400 text-[10px] tracking-widest uppercase mb-12">Authorized Retailer for Global Brands</p>
         <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all text-white">
            {['RAY-BAN', 'OAKLEY', 'GUCCI', 'PRADA', 'ZEISS', 'ESSILOR'].map(brand => (
              <span key={brand} className="text-2xl font-bold font-display tracking-tighter">{brand}</span>
            ))}
         </div>
      </Section>
    </div>
  );
}
