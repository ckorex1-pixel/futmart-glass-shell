import { Search, MapPin, ScanLine } from 'lucide-react';
import { GLASS_STYLES } from '@/lib/constants';
import { useAuth } from '@/hooks/useAuth';

export const TopHeader = () => {
  const { user } = useAuth();

  return (
    <header className={GLASS_STYLES.header}>
      <div className="px-4 py-3 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">FutMart</span>
          </div>
          <button className="flex items-center gap-1.5 text-white/80 text-sm font-medium bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5" />
            <span>{user?.location || 'Set Location'}</span>
          </button>
        </div>
        
        <div className="relative flex items-center">
          <Search className="absolute left-3 w-4 h-4 text-white/40" />
          <input 
            type="text" 
            placeholder="Search items, brands..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white/20 placeholder:text-white/30"
          />
          <ScanLine className="absolute right-3 w-4 h-4 text-white/40" />
        </div>
      </div>
    </header>
  );
};