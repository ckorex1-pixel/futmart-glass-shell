import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { GLASS_STYLES } from '@/lib/constants';
import { LogIn, Mail } from 'lucide-react';
import { toast } from 'sonner';

export const Login = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email');
    login(email);
    toast.success('Welcome back to FutMart!');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-red-500/20 blur-[150px] rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-white/5 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-xl">
            <span className="text-4xl font-black text-white">F</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white mb-2">FutMart</h1>
          <p className="text-white/40 font-medium">Premium Peer-to-Peer Marketplace</p>
        </div>

        <div className={GLASS_STYLES.container + " rounded-[2.5rem] p-8"}>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-white/20 transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-black py-4 rounded-2xl active:scale-[0.98] transition-all shadow-lg shadow-white/10"
            >
              Get Started
            </button>
          </form>

          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <span className="relative px-4 text-[10px] font-bold uppercase tracking-widest text-white/20 bg-transparent">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
                <span className="text-lg font-bold">G</span>
                <span className="text-xs font-bold">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
                <span className="text-lg font-bold"></span>
                <span className="text-xs font-bold">Apple</span>
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-center mt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
          Secure • Encrypted • Premium
        </p>
      </motion.div>
    </div>
  );
};