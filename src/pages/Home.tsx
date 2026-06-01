import { motion } from 'framer-motion';
import { GLASS_STYLES, CATEGORIES, MOCK_IMAGES } from '@/lib/constants';
import { CheckCircle, Plus, Sparkles, TrendingUp } from 'lucide-react';

const ListingCard = ({ title, price, image, isVerified }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`${GLASS_STYLES.card} rounded-[2rem] overflow-hidden group`}
  >
    <div className="relative aspect-[4/5]">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      
      {isVerified && (
        <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
          <CheckCircle className="w-3 h-3 text-blue-400 fill-blue-400" />
          <span className="text-[9px] font-black uppercase tracking-widest text-white">Verified</span>
        </div>
      )}
      
      <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 active:scale-90 transition-all">
        <Plus className="w-4 h-4 text-white" />
      </button>

      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-lg font-black text-white drop-shadow-lg">${price}</p>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xs font-bold text-white/80 line-clamp-1 uppercase tracking-tight">{title}</h3>
      <div className="flex items-center gap-2 mt-2">
         <div className="w-4 h-4 rounded-full bg-white/10 border border-white/20" />
         <span className="text-[10px] text-white/40 font-medium">2km away • 5m ago</span>
      </div>
    </div>
  </motion.div>
);

export const Home = () => {
  return (
    <div className="px-4 py-6 flex flex-col gap-10">
      {/* Search/Filter Bar */}
      <section className="flex items-center gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 mb-2 px-1">
            <TrendingUp className="w-3 h-3" />
            <span>Trending Categories</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
            {CATEGORIES.map((cat) => (
              <motion.button 
                whileTap={{ scale: 0.95 }}
                key={cat.id} 
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl whitespace-nowrap backdrop-blur-md"
              >
                <span className="text-sm">📦</span>
                <span className="text-xs font-bold">{cat.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Banner */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-56 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
      >
        <img src={MOCK_IMAGES.hero1} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center p-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-red-500/20 text-red-400 text-[10px] font-black px-2 py-1 rounded border border-red-500/30 uppercase tracking-widest">Limited Offer</div>
          </div>
          <h3 className="text-2xl font-black leading-tight text-white mb-2">Upgrade to<br />The Future.</h3>
          <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">Explore the next-gen collection</p>
          
          <button className="mt-6 self-start bg-white text-black text-[10px] font-black px-6 py-3 rounded-full uppercase tracking-widest active:scale-95 transition-all">Shop Now</button>
        </div>
      </motion.section>

      {/* Grid Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            Fresh Drops
          </h2>
          <button className="text-[10px] font-bold uppercase tracking-widest text-white/30">View All</button>
        </div>
        <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.1em]">Selected just for your style</p>
      </div>

      {/* Featured Listings */}
      <section className="grid grid-cols-2 gap-4 pb-10">
        <ListingCard 
          title="Sleek Future Smartphone" 
          price="1,299" 
          image={MOCK_IMAGES.electronics}
          isVerified={true}
        />
        <ListingCard 
          title="Luxury Designer Sneakers" 
          price="450" 
          image={MOCK_IMAGES.fashion}
          isVerified={false}
        />
        <ListingCard 
          title="Modern Sofa Set" 
          price="2,100" 
          image={MOCK_IMAGES.hero3}
          isVerified={true}
        />
        <ListingCard 
          title="Minimalist Work Desk" 
          price="890" 
          image={MOCK_IMAGES.hero2}
          isVerified={false}
        />
      </section>

      {/* Floating Action Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-14 h-14 bg-white rounded-2xl shadow-2xl shadow-white/20 flex items-center justify-center z-40 border-4 border-black"
      >
        <Plus className="w-7 h-7 text-black stroke-[3]" />
      </motion.button>
    </div>
  );
};