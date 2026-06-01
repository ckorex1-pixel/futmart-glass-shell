import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { TopHeader } from './TopHeader';

export const AppLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white pb-20 selection:bg-white/20">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-red-500/10 blur-[100px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[20%] h-[20%] bg-purple-500/10 blur-[80px] rounded-full" />
      </div>

      <TopHeader />
      <main className="relative z-10">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};