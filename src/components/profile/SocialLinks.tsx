import React from 'react';
import type { PublicMember } from '@/types/member';

interface SocialLinksProps {
  member: PublicMember;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ member }) => {
  const socials = [
    {
      id: 'linkedin',
      url: member.linkedin_url,
      label: 'LinkedIn',
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>,
      colorClass: 'text-[#0077b5] hover:bg-[#0077b5] hover:text-white border-[#0077b5]'
    },
    {
      id: 'facebook',
      url: member.facebook_url,
      label: 'Facebook',
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>,
      colorClass: 'text-[#1877F2] hover:bg-[#1877F2] hover:text-white border-[#1877F2]'
    },
    {
      id: 'instagram',
      url: member.instagram_url,
      label: 'Instagram',
      icon: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
      colorClass: 'text-[#E4405F] hover:bg-[#E4405F] hover:text-white border-[#E4405F]'
    }
  ];

  const availableSocials = socials.filter(s => s.url);

  if (availableSocials.length === 0) return null;

  return (
    <div className="bg-surface rounded-xl shadow-sm border border-border p-6 mt-6">
      <h3 className="text-lg font-heading font-bold text-text mb-4">Connect Socially</h3>
      <div className="flex space-x-3">
        {availableSocials.map(social => (
          <a
            key={social.id}
            href={social.url!}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors bg-white ${social.colorClass}`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
