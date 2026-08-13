import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const getInitials = (name: string) => {
    if (!name) return 'LC';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 0) return 'LC';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

  if (hasError || !src) {
    if (fallbackSrc) {
      return <img src={fallbackSrc} alt={alt} className={className} {...props} />;
    }
    
    return (
      <div className={`flex items-center justify-center bg-primary text-white font-bold ${className}`}>
        {getInitials(alt || '')}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
