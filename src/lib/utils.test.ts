
import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('utils/cn', () => {
    it('should merge class names correctly', () => {
        expect(cn('c-1', 'c-2')).toBe('c-1 c-2');
    });

    it('should handle conditional classes', () => {
        expect(cn('c-1', false && 'c-2', 'c-3')).toBe('c-1 c-3');
    });

    it('should merge tailwind classes properly', () => {
        // tailwind-merge should resolve conflicts
        expect(cn('p-4', 'p-2')).toBe('p-2'); 
        expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500');
    });
});
