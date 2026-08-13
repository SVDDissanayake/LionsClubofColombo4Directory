import React from 'react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-surface rounded-xl border border-dashed border-gray-300">
      {icon && <div className="mb-4 text-gray-400">{icon}</div>}
      <h3 className="text-lg font-medium text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-muted max-w-sm mx-auto">{description}</p>
    </div>
  );
};
