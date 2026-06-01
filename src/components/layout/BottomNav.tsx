import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, MessageCircle, Bell, Heart, User } from 'lucide-react';
import { GLASS_STYLES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const BottomNav = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: MessageCircle, label: 'Messages', path: '/messages', badge: 3 },
    { icon: Bell, label: 'Alerts', path: '/notifications', badge: 5 },
    { icon: Heart, label: 'Saved', path: '/saved' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className={cn(GLASS_STYLES.nav, "h-16 flex items-center justify-around px-2")}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "relative flex flex-col items-center justify-center w-full h-full transition-colors",
              isActive ? "text-white" : "text-white/40"
            )
          }
        >
          <div className="relative">
            <item.icon className="w-6 h-6" />
            {item.badge && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center border border-black">
                {item.badge}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 font-medium">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};