import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { PublicMember } from '@/types/member';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface MemberCardProps {
  member: PublicMember;
  index?: number;
  viewMode?: 'grid' | 'list';
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, index = 0, viewMode = 'grid' }) => {
  const [showQuickActions, setShowQuickActions] = useState(false);

  if (viewMode === 'list') {
    return (
      <Link
        to={`/member/${member.slug}`}
        className="animate-stagger group flex items-center gap-4 bg-surface rounded-xl p-4 border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
        style={{ '--stagger-delay': `${index * 50}ms` } as React.CSSProperties}
      >
        {/* Avatar */}
        <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-accent transition-colors duration-300">
          <ImageWithFallback
            src={member.profile_photo_url || ''}
            alt={member.full_name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-bold text-text truncate group-hover:text-primary transition-colors">
            {member.full_name}
          </h3>
          <div className="flex items-center gap-3 text-sm text-text-muted mt-0.5">
            {member.designation && <span>{member.designation}</span>}
            {member.profession && (
              <span className="flex items-center gap-1 text-xs">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {member.profession}
              </span>
            )}
          </div>
        </div>

        {/* Quick contact icons */}
        <div className="hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {member.phone && (
            <span
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`tel:${member.phone}`); }}
              className="p-2 rounded-full bg-success/10 text-success hover:bg-success/20 transition-colors cursor-pointer"
              title="Call"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
          )}
          {member.whatsapp && (
            <span
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`); }}
              className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors cursor-pointer"
              title="WhatsApp"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          )}
          {member.email && (
            <span
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`mailto:${member.email}`); }}
              className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              title="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          )}
        </div>

        {/* Arrow */}
        <svg className="w-4 h-4 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    );
  }

  // Grid view (default)
  return (
    <div
      className="animate-stagger gradient-border group block h-full"
      style={{ '--stagger-delay': `${index * 70}ms` } as React.CSSProperties}
      onMouseEnter={() => setShowQuickActions(true)}
      onMouseLeave={() => setShowQuickActions(false)}
    >
      <Link to={`/member/${member.slug}`} className="block h-full">
        <div className="bg-surface rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 ease-out overflow-hidden border border-border h-full flex flex-col">
          {/* Photo Container */}
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
            <ImageWithFallback
              src={member.profile_photo_url || ''}
              alt={member.full_name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Quick action buttons — appear on hover */}
            <div
              className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 transition-all duration-300 ${
                showQuickActions ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}
            >
              {member.phone && (
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`tel:${member.phone}`); }}
                  className="p-2.5 rounded-full glass text-success hover:bg-success hover:text-white transition-all duration-200 shadow-lg"
                  title="Call"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              )}
              {member.whatsapp && (
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`https://wa.me/${member.whatsapp.replace(/[^0-9]/g, '')}`); }}
                  className="p-2.5 rounded-full glass text-green-600 hover:bg-green-500 hover:text-white transition-all duration-200 shadow-lg"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </button>
              )}
              {member.email && (
                <button
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(`mailto:${member.email}`); }}
                  className="p-2.5 rounded-full glass text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                  title="Email"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              )}
            </div>

            {/* Category badge */}
            {member.category?.name && (
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-dark bg-accent/90 rounded-full shadow-sm backdrop-blur-sm">
                  {member.category.name}
                </span>
              </div>
            )}

            {/* Active indicator dot */}
            <div className="absolute top-3 left-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-success border-2 border-white"></span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-grow flex flex-col">
            <h3 className="font-heading font-bold text-lg text-text leading-tight mb-1 group-hover:text-primary transition-colors duration-200">
              {member.full_name}
            </h3>

            {member.designation && (
              <p className="text-sm text-text-muted font-medium mb-1">
                {member.designation}
              </p>
            )}

            {member.profession && (
              <p className="flex items-center gap-1.5 text-xs text-text-muted/70 mb-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {member.profession}
              </p>
            )}

            <div className="mt-auto pt-3 border-t border-border/50">
              <span className="text-xs text-primary font-semibold group-hover:underline flex items-center gap-1">
                View Profile
                <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
