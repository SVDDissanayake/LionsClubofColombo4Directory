import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminMemberForm from '@/components/admin/AdminMemberForm';
import { memberService } from '@/services/memberService';
import { categoryService } from '@/services/categoryService';
import type { Member, MemberFormData } from '@/types/member';
import type { Category } from '@/types/category';

const AdminMemberEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [member, setMember] = useState<Member | undefined>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(isEditMode);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const catRes = await categoryService.fetchAllCategories();
      if (catRes.data) {
        setCategories(catRes.data);
      }

      if (isEditMode && id) {
        const memRes = await memberService.fetchMemberById(id);
        if (memRes.data) {
          setMember(memRes.data);
        } else {
          setError('Member not found');
        }
      }
      setLoading(false);
    };

    loadData();
  }, [id, isEditMode]);

  const handleSubmit = async (data: MemberFormData) => {
    setSaving(true);
    setError(null);
    try {
      if (isEditMode && id) {
        const { error: updateErr } = await memberService.updateMember(id, data);
        if (updateErr) throw updateErr;
      } else {
        const { error: createErr } = await memberService.createMember(data);
        if (createErr) throw createErr;
      }
      navigate('/admin/members');
    } catch (err: any) {
      setError(err.message || 'Failed to save member');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/admin/members')}
          className="mr-4 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-2xl font-heading font-bold text-gray-800">
          {isEditMode ? 'Edit Member' : 'Add New Member'}
        </h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-error/10 text-error rounded-md border border-error/20">
          {error}
        </div>
      )}

      <AdminMemberForm 
        member={member} 
        categories={categories} 
        onSubmit={handleSubmit} 
        onCancel={() => navigate('/admin/members')} 
        loading={saving} 
      />
    </div>
  );
};

export default AdminMemberEdit;
