import React, { useEffect, useState } from 'react';
import { memberService } from '@/services/memberService';
import { categoryService } from '@/services/categoryService';
import type { Member } from '@/types/database';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalMembers: 0,
    activeMembers: 0,
    totalCategories: 0,
    birthdaysToday: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [membersRes, categoriesRes] = await Promise.all([
        memberService.fetchAllMembers(),
        categoryService.fetchAllCategories()
      ]);

      if (membersRes.data && categoriesRes.data) {
        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentDate = today.getDate();

        const birthdays = membersRes.data.filter((m: Member) => {
          if (!m.date_of_birth) return false;
          const dob = new Date(m.date_of_birth);
          return dob.getMonth() + 1 === currentMonth && dob.getDate() === currentDate;
        });

        setStats({
          totalMembers: membersRes.data.length,
          activeMembers: membersRes.data.filter((m: Member) => m.is_active).length,
          totalCategories: categoriesRes.data.length,
          birthdaysToday: birthdays.length
        });
      }
      setLoading(false);
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  const statCards = [
    { title: 'Total Members', value: stats.totalMembers, icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', color: 'bg-blue-50 text-blue-600' },
    { title: 'Active Members', value: stats.activeMembers, icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'bg-green-50 text-green-600' },
    { title: 'Categories', value: stats.totalCategories, icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', color: 'bg-purple-50 text-purple-600' },
    { title: "Today's Birthdays", value: stats.birthdaysToday, icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z', color: 'bg-accent/20 text-accent-dark' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-heading font-bold mb-6 text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-surface rounded-lg shadow-sm border border-border p-6 flex items-center">
            <div className={`p-4 rounded-full mr-4 ${stat.color}`}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} /></svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-surface rounded-lg shadow-sm border border-border p-6">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Quick Actions</h2>
        <div className="flex gap-4">
          <a href="/admin/members/new" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors text-sm font-medium">Add New Member</a>
          <a href="/admin/categories" className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors text-sm font-medium">Manage Categories</a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
