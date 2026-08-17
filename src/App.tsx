import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { PageLayout } from '@/components/layout/PageLayout';
import ProtectedRoute from '@/components/admin/ProtectedRoute';
import AdminSidebar from '@/components/admin/AdminSidebar';

// Pages
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminMembers from '@/pages/admin/AdminMembers';
import AdminMemberEdit from '@/pages/admin/AdminMemberEdit';
import AdminCategories from '@/pages/admin/AdminCategories';

import { HomePage } from '@/pages/HomePage';
import { DirectoryPage } from '@/pages/DirectoryPage';
import { MemberProfilePage } from '@/pages/MemberProfilePage';
import { BirthdaysPage } from '@/pages/BirthdaysPage';
import { AboutPage } from '@/pages/AboutPage';
import { LoginPage } from '@/pages/LoginPage';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PageLayout><HomePage /></PageLayout>} />
          <Route path="/directory" element={<PageLayout><DirectoryPage /></PageLayout>} />
          <Route path="/member/:slug" element={<PageLayout><MemberProfilePage /></PageLayout>} />
          <Route path="/birthdays" element={<PageLayout><BirthdaysPage /></PageLayout>} />
          <Route path="/about" element={<PageLayout><AboutPage /></PageLayout>} />
          <Route path="/login" element={<PageLayout><LoginPage /></PageLayout>} />

          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="members" element={<AdminMembers />} />
            <Route path="members/new" element={<AdminMemberEdit />} />
            <Route path="members/:id" element={<AdminMemberEdit />} />
            <Route path="categories" element={<AdminCategories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
