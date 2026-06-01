import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
  location?: string;
  phone?: string;
  isOnboarded: boolean;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string) => void;
  logout: () => void;
  completeOnboarding: (details: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('futmart_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email: string) => {
    const newUser = {
      id: '1',
      email,
      isOnboarded: false,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FutMart',
    };
    setUser(newUser);
    localStorage.setItem('futmart_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('futmart_user');
  };

  const completeOnboarding = (details: Partial<User>) => {
    if (!user) return;
    const updatedUser = { ...user, ...details, isOnboarded: true };
    setUser(updatedUser);
    localStorage.setItem('futmart_user', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, completeOnboarding }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};