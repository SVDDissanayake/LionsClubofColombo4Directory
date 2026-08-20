import React, { useRef, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  matchCount?: number;
  isHero?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, matchCount, isHero = false }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Ctrl+K / Cmd+K keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div
        className={`relative search-glow rounded-2xl transition-all duration-300 ${
          isHero
            ? 'glass shadow-xl'
            : 'bg-surface border border-border shadow-sm'
        }`}
      >
        {/* Search icon */}
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg
            className={`h-5 w-5 transition-colors duration-200 ${
              value ? 'text-primary' : 'text-gray-400'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          className={`block w-full pl-13 pr-28 py-4 rounded-2xl leading-5 placeholder-gray-400 focus:outline-none bg-transparent text-text transition-all ${
            isHero ? 'text-base' : 'text-sm'
          }`}
          placeholder="Search members by name, designation, or profession..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {/* Right side: match count + clear + shortcut hint */}
        <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-4">
          {/* Match count pill */}
          {value && matchCount !== undefined && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary animate-scale-in">
              {matchCount} {matchCount === 1 ? 'match' : 'matches'}
            </span>
          )}

          {/* Clear button */}
          {value && (
            <button
              onClick={() => onChange('')}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none transition-all duration-200"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Keyboard shortcut hint */}
          {!value && (
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-mono text-gray-400 bg-gray-100 border border-gray-200">
              <span className="text-xs">⌘</span>K
            </kbd>
          )}
        </div>
      </div>
    </div>
  );
};
