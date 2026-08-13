import React, { useState } from 'react';
import type { Member } from '@/types/member';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

interface AdminMemberTableProps {
  members: Member[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleActive: (id: string, isActive: boolean) => void;
  loading: boolean;
}

const AdminMemberTable: React.FC<AdminMemberTableProps> = ({ members, onEdit, onDelete, onToggleActive, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-200 rounded-md"></div>
        ))}
      </div>
    );
  }

  const filteredMembers = members.filter(m => 
    m.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    (m.category?.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (m.designation || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-surface rounded-lg shadow-sm border border-border overflow-hidden">
      <div className="p-4 border-b border-border flex justify-between items-center bg-gray-50">
        <input 
          type="text" 
          placeholder="Search members..." 
          className="px-4 py-2 border border-border rounded-md w-full max-w-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-semibold">Member</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">Designation</th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">Category</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredMembers.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-gray-500">
                  No members found.
                </td>
              </tr>
            ) : (
              filteredMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 border border-gray-300">
                        <ImageWithFallback src={member.profile_photo_url || undefined} alt={member.full_name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{member.full_name}</div>
                        <div className="text-xs text-gray-500 sm:hidden">{member.designation}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 hidden sm:table-cell text-gray-600">{member.designation || '-'}</td>
                  <td className="px-4 py-3 hidden md:table-cell text-gray-600">{member.category?.name || '-'}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${member.is_active ? 'bg-success/10 text-success' : 'bg-gray-100 text-gray-600'}`}>
                      {member.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right space-x-2">
                    <button 
                      onClick={() => onToggleActive(member.id, !member.is_active)}
                      className="p-1.5 text-gray-500 hover:text-primary transition-colors"
                      title={member.is_active ? 'Deactivate' : 'Activate'}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    </button>
                    <button 
                      onClick={() => onEdit(member.id)}
                      className="p-1.5 text-gray-500 hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </button>
                    <button 
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete ${member.full_name}?`)) {
                          onDelete(member.id);
                        }
                      }}
                      className="p-1.5 text-gray-500 hover:text-error transition-colors"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMemberTable;
