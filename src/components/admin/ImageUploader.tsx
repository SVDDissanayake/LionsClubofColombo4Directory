import React, { useRef, useState } from 'react';

interface ImageUploaderProps {
  currentImageUrl?: string | null;
  onUpload: (file: File) => Promise<void>;
  onRemove?: () => void;
  loading?: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ currentImageUrl, onUpload, onRemove, loading }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      await processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      await processFile(e.target.files[0]);
    }
  };

  const processFile = async (file: File) => {
    setError(null);
    
    // Basic validation
    if (!file.type.match('image.*')) {
      setError('Please select an image file (JPG, PNG, WebP)');
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    try {
      await onUpload(file);
    } catch (err: any) {
      setError(err.message || 'Failed to upload image');
    }
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <div 
        className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors
          ${dragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}
          ${loading ? 'opacity-50 pointer-events-none' : ''}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input 
          ref={fileInputRef}
          type="file" 
          accept="image/jpeg, image/png, image/webp" 
          className="hidden" 
          onChange={handleChange}
        />

        {currentImageUrl ? (
          <div className="relative group">
            <img 
              src={currentImageUrl} 
              alt="Preview" 
              className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-sm"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <button 
                type="button"
                onClick={triggerSelect}
                className="text-white p-1 hover:text-primary-light"
                title="Change Image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4 border border-gray-200">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          </div>
        )}

        <div className="text-center mt-4">
          <button 
            type="button" 
            onClick={triggerSelect}
            className="text-sm font-medium text-primary hover:text-primary-dark"
          >
            Click to upload
          </button>
          <span className="text-sm text-gray-500"> or drag and drop</span>
          <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </div>

        {loading && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center rounded-lg">
            <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
      
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
      
      {currentImageUrl && onRemove && (
        <button 
          type="button" 
          onClick={onRemove}
          className="mt-3 text-sm text-error hover:text-red-700 font-medium flex items-center justify-center w-full"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Remove Photo
        </button>
      )}
    </div>
  );
};

export default ImageUploader;
