import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { GLASS_STYLES } from '@/lib/constants';
import { User, MapPin, Phone, Check } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export const Onboarding = () => {
  const { completeOnboarding } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.phone) {
      return toast.error('Please fill in all fields');
    }
    completeOnboarding(formData);
    toast.success('Profile set up complete!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[100px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white mb-2">Complete Your Profile</h1>
          <p className="text-white/40 text-sm">One last step before you start trading</p>
        </div>

        <div className={GLASS_STYLES.container + " rounded-[2rem] p-8"}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, Country"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 234 567 890"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <span>Finish Setup</span>
              <Check className="w-5 h-5" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};