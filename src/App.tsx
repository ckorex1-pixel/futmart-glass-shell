import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/hooks/useAuth';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { AppLayout } from '@/components/layout/AppLayout';
import { Home } from '@/pages/Home';
import { Messages } from '@/pages/Messages';
import { Profile } from '@/pages/Profile';
import { Login } from '@/pages/Login';
import { Onboarding } from '@/pages/Onboarding';
import { Notifications } from '@/pages/Notifications';
import { Toaster } from 'sonner';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/onboarding" element={
            <AuthGuard>
              <Onboarding />
            </AuthGuard>
          } />

          {/* Protected Main Layout Routes */}
          <Route element={
            <AuthGuard>
              <AppLayout />
            </AuthGuard>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/saved" element={<div className="p-10 text-center font-bold text-white/20">Saved Ads Coming Soon</div>} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
      <Toaster position="top-center" theme="dark" closeButton />
    </AuthProvider>
  );
}

export default App;