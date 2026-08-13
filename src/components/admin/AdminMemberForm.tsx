import React, { useState } from 'react';
import type { Member, MemberFormData } from '@/types/member';
import type { Category } from '@/types/category';
import ImageUploader from './ImageUploader';
import { generateMemberSlug } from '@/utils/slugify';

interface AdminMemberFormProps {
  member?: Member;
  categories: Category[];
  onSubmit: (data: MemberFormData) => Promise<void>;
  onCancel: () => void;
  loading: boolean;
}

const AdminMemberForm: React.FC<AdminMemberFormProps> = ({ member, categories, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState<MemberFormData>({
    first_name: member?.first_name || '',
    last_name: member?.last_name || '',
    slug: member?.slug || '',
    profile_photo_url: member?.profile_photo_url || null,
    designation: member?.designation || '',
    category_id: member?.category_id || '',
    date_of_birth: member?.date_of_birth || '',
    phone: member?.phone || '',
    whatsapp: member?.whatsapp || '',
    email: member?.email || '',
    address: member?.address || '',
    profession: member?.profession || '',
    joined_date: member?.joined_date || '',
    membership_id: member?.membership_id || '',
    biography: member?.biography || '',
    linkedin_url: member?.linkedin_url || '',
    facebook_url: member?.facebook_url || '',
    instagram_url: member?.instagram_url || '',
    display_order: member?.display_order ?? 0,
    is_active: member?.is_active ?? true,
    show_phone: member?.show_phone ?? true,
    show_email: member?.show_email ?? true,
    show_address: member?.show_address ?? false,
    show_whatsapp: member?.show_whatsapp ?? true,
  });

  const [, setPhotoFile] = useState<File | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      if (!member && (name === 'first_name' || name === 'last_name')) {
        updated.slug = generateMemberSlug(updated.first_name, updated.last_name);
      }
      return updated;
    });
  };

  const handleToggleChange = (name: keyof MemberFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [name]: e.target.checked }));
  };

  const handlePhotoUpload = async (file: File) => {
    setPhotoFile(file);
    const objectUrl = URL.createObjectURL(file);
    setFormData(prev => ({ ...prev, profile_photo_url: objectUrl }));
  };

  const handlePhotoRemove = () => {
    setPhotoFile(null);
    setFormData(prev => ({ ...prev, profile_photo_url: null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData); // Assume photo upload is handled in the page component if photoFile exists, or update the signature later if needed.
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface rounded-lg shadow-sm border border-border p-6 space-y-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Profile Photo</h3>
          <ImageUploader 
            currentImageUrl={formData.profile_photo_url}
            onUpload={handlePhotoUpload}
            onRemove={handlePhotoRemove}
          />
          <div className="mt-4 p-4 bg-gray-50 rounded border text-sm text-gray-600">
            <p>Upload a square image for best results.</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Basic Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                <input required type="text" name="first_name" value={formData.first_name} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                <input required type="text" name="last_name" value={formData.last_name} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md bg-gray-50 focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Designation (e.g., President)</label>
                <input type="text" name="designation" value={formData.designation} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select name="category_id" value={formData.category_id} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary">
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                <input type="number" name="display_order" value={formData.display_order} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Contact & Personal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea name="address" rows={2} value={formData.address} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Biography</label>
                <textarea name="biography" rows={4} value={formData.biography} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary"></textarea>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Social & Membership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label><input type="url" name="linkedin_url" value={formData.linkedin_url} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label><input type="url" name="facebook_url" value={formData.facebook_url} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Membership ID</label><input type="text" name="membership_id" value={formData.membership_id} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Joined Date</label><input type="date" name="joined_date" value={formData.joined_date} onChange={handleTextChange} className="w-full px-3 py-2 border rounded-md focus:ring-primary" /></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b pb-2">Privacy & Status</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <label className="flex items-center space-x-2 text-sm"><input type="checkbox" checked={formData.show_phone} onChange={handleToggleChange('show_phone')} className="rounded text-primary" /><span>Show Phone</span></label>
              <label className="flex items-center space-x-2 text-sm"><input type="checkbox" checked={formData.show_whatsapp} onChange={handleToggleChange('show_whatsapp')} className="rounded text-primary" /><span>Show WhatsApp</span></label>
              <label className="flex items-center space-x-2 text-sm"><input type="checkbox" checked={formData.show_email} onChange={handleToggleChange('show_email')} className="rounded text-primary" /><span>Show Email</span></label>
              <label className="flex items-center space-x-2 text-sm"><input type="checkbox" checked={formData.show_address} onChange={handleToggleChange('show_address')} className="rounded text-primary" /><span>Show Address</span></label>
            </div>
            <div className="pt-4 border-t">
              <label className="flex items-center space-x-2 text-sm font-medium"><input type="checkbox" checked={formData.is_active} onChange={handleToggleChange('is_active')} className="rounded text-primary h-4 w-4" /><span>Member is Active</span></label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-border">
        <button type="button" onClick={onCancel} disabled={loading} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button>
        <button type="submit" disabled={loading} className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors disabled:opacity-50">
          {loading ? 'Saving...' : 'Save Member'}
        </button>
      </div>
    </form>
  );
};

export default AdminMemberForm;
