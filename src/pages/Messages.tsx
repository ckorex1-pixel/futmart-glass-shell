import { GLASS_STYLES } from '@/lib/constants';
import { Search, Settings, MoreVertical } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_CHATS = [
  { id: '1', name: 'Alex Rivera', lastMsg: 'Is the price negotiable?', time: '2m ago', unread: 2, online: true },
  { id: '2', name: 'Sarah Chen', lastMsg: 'Sent the location!', time: '15m ago', unread: 0, online: false },
  { id: '3', name: 'Marco Rossi', lastMsg: 'Thanks for the deal!', time: '1h ago', unread: 0, online: true },
  { id: '4', name: 'Elena Gilbert', lastMsg: 'Can you hold it until Friday?', time: '3h ago', unread: 1, online: false },
];

export const Messages = () => {
  return (
    <div className="min-h-screen">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black">Messages</h1>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"><Settings className="w-5 h-5" /></button>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input 
            type="text" 
            placeholder="Search conversations..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          {MOCK_CHATS.map((chat) => (
            <motion.div 
              key={chat.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={GLASS_STYLES.card + " p-4 rounded-2xl flex items-center gap-4 cursor-pointer"}
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${chat.name}`} alt={chat.name} />
                </div>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-black rounded-full" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <h3 className="font-bold text-sm truncate">{chat.name}</h3>
                  <span className="text-[10px] text-white/30 font-bold uppercase tracking-wider">{chat.time}</span>
                </div>
                <p className={`text-xs truncate ${chat.unread > 0 ? 'text-white font-bold' : 'text-white/40'}`}>
                  {chat.lastMsg}
                </p>
              </div>

              {chat.unread > 0 && (
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-[10px] font-bold">{chat.unread}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};