import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminMemberTable from '@/components/admin/AdminMemberTable';
import { memberService } from '@/services/memberService';
import type { Member } from '@/types/member';

const AdminMembers: React.FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadMembers = async () => {
    setLoading(true);
    const { data, error } = await memberService.fetchAllMembers();
    if (error) {
      setError(error.message || 'Failed to load members');
    } else if (data) {
      setMembers(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMembers();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/admin/members/${id}`);
  };

  const handleDelete = async (id: string) => {
    const { error } = await memberService.deleteMember(id);
    if (error) {
      alert(error.message || 'Failed to delete member');
    } else {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleToggleActive = async (id: string, isActive: boolean) => {
    const { error } = await memberService.toggleMemberActive(id, isActive);
    if (error) {
      alert(error.message || 'Failed to update member status');
    } else {
      setMembers(members.map(m => m.id === id ? { ...m, is_active: isActive } : m));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-gray-800">Members Directory</h1>
        <button 
          onClick={() => navigate('/admin/members/new')}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors flex items-center text-sm font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add New Member
        </button>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-error/10 text-error rounded-md border border-error/20">
          {error}
        </div>
      )}

      <AdminMemberTable 
        members={members} 
        loading={loading} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
        onToggleActive={handleToggleActive} 
      />
    </div>
  );
};

export default AdminMembers;
