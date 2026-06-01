import { motion } from 'framer-motion';
import { GLASS_STYLES } from '@/lib/constants';
import { Bell, Shield, Info, CheckCircle2 } from 'lucide-react';

const NOTIFICATIONS = [
  { id: '1', type: 'system', title: 'Security Alert', message: 'Your account was accessed from a new device.', time: '5m ago', icon: Shield, color: 'text-blue-400' },
  { id: '2', type: 'sale', title: 'Item Sold!', message: 'Your iPhone 13 Pro has been sold to Marco.', time: '1h ago', icon: CheckCircle2, color: 'text-green-400' },
  { id: '3', type: 'alert', title: 'Price Drop', message: 'An item in your saved list just dropped in price.', time: '3h ago', icon: Bell, color: 'text-red-400' },
  { id: '4', type: 'system', title: 'Welcome to FutMart', message: 'Start exploring premium listings today.', time: '1d ago', icon: Info, color: 'text-purple-400' },
];

export const Notifications = () => {
  return (
    <div className="min-h-screen px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-black">Notifications</h1>
        <button className="text-[10px] font-bold uppercase tracking-widest text-white/30">Mark all as read</button>
      </div>

      <div className="space-y-3">
        {NOTIFICATIONS.map((notif, idx) => (
          <motion.div 
            key={notif.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={GLASS_STYLES.card + " p-4 rounded-2xl flex gap-4"}
          >
            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0`}>
              <notif.icon className={`w-6 h-6 ${notif.color}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm">{notif.title}</h3>
                <span className="text-[10px] text-white/20 font-bold uppercase">{notif.time}</span>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">{notif.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};