import React, { useState, useEffect } from 'react';
import AdminCategoryTable from '@/components/admin/AdminCategoryTable';
import AdminCategoryForm from '@/components/admin/AdminCategoryForm';
import { categoryService } from '@/services/categoryService';
import type { Category, CategoryFormData } from '@/types/category';

const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | undefined>();
  const [saving, setSaving] = useState(false);

  const loadCategories = async () => {
    setLoading(true);
    const { data, error } = await categoryService.fetchAllCategories();
    if (error) {
      setError(error.message || 'Failed to load categories');
    } else if (data) {
      setCategories(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleAddNew = () => {
    setEditingCategory(undefined);
    setIsFormOpen(true);
    setError(null);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setIsFormOpen(true);
    setError(null);
  };

  const handleDelete = async (id: string) => {
    const { error } = await categoryService.deleteCategory(id);
    if (error) {
      alert(error.message || 'Failed to delete category');
    } else {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const handleSubmit = async (data: CategoryFormData) => {
    setSaving(true);
    setError(null);
    try {
      if (editingCategory) {
        const { error: updateErr } = await categoryService.updateCategory(editingCategory.id, data);
        if (updateErr) throw updateErr;
      } else {
        const { error: createErr } = await categoryService.createCategory(data);
        if (createErr) throw createErr;
      }
      setIsFormOpen(false);
      await loadCategories();
    } catch (err: any) {
      setError(err.message || 'Failed to save category');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-heading font-bold text-gray-800">Categories</h1>
        {!isFormOpen && (
          <button 
            onClick={handleAddNew}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors flex items-center text-sm font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Add Category
          </button>
        )}
      </div>

      {error && (
        <div className="mb-4 p-4 bg-error/10 text-error rounded-md border border-error/20">
          {error}
        </div>
      )}

      {isFormOpen ? (
        <div className="mb-8">
          <AdminCategoryForm 
            category={editingCategory}
            onSubmit={handleSubmit}
            onCancel={() => setIsFormOpen(false)}
            loading={saving}
          />
        </div>
      ) : (
        <AdminCategoryTable 
          categories={categories}
          loading={loading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default AdminCategories;
