import { useAuth } from '@/hooks/useAuth';
import { GLASS_STYLES } from '@/lib/constants';
import { Settings, Shield, Package, MapPin, LogOut, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MenuOption = ({ icon: Icon, label, value, color = "text-white" }: any) => (
  <div className={GLASS_STYLES.card + " p-4 rounded-2xl flex items-center justify-between cursor-pointer"}>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
        <Icon className={"w-5 h-5 " + color} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-white/30">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
    <ChevronRight className="w-4 h-4 text-white/20" />
  </div>
);

export const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="flex flex-col items-center mb-10">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative mb-4"
        >
          <div className="w-28 h-28 rounded-[2.5rem] bg-white/5 border border-white/20 p-1 backdrop-blur-xl">
            <img 
              src={user?.avatar} 
              className="w-full h-full object-cover rounded-[2.2rem]" 
              alt="Profile" 
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-2xl border-4 border-black">
            <Shield className="w-4 h-4 text-white" />
          </div>
        </motion.div>
        
        <h1 className="text-2xl font-black mb-1">{user?.name}</h1>
        <div className="flex items-center gap-1.5 text-white/40 text-sm font-medium">
          <MapPin className="w-3.5 h-3.5" />
          <span>{user?.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className={GLASS_STYLES.card + " p-5 rounded-3xl text-center"}>
          <p className="text-2xl font-black mb-1">12</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Ads Posted</p>
        </div>
        <div className={GLASS_STYLES.card + " p-5 rounded-3xl text-center"}>
          <p className="text-2xl font-black mb-1">4.9</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Rating</p>
        </div>
      </div>

      <div className="space-y-3 mb-10">
        <MenuOption icon={Package} label="My Listings" value="Manage your active ads" />
        <MenuOption icon={Shield} label="Verification" value="Status: Verified" color="text-blue-400" />
        <MenuOption icon={Settings} label="Settings" value="Account & Privacy" />
      </div>

      <button 
        onClick={logout}
        className="w-full flex items-center justify-center gap-3 bg-red-500/10 border border-red-500/20 py-4 rounded-2xl text-red-500 font-bold active:scale-95 transition-all"
      >
        <LogOut className="w-5 h-5" />
        <span>Log Out</span>
      </button>
    </div>
  );
};