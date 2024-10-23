import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageSelector } from '../../components/LanguageSelector';
import { useLanguageStore } from '../../store/languageStore';

vi.mock('../../store/languageStore', () => ({
  useLanguageStore: vi.fn(() => ({
    currentLanguage: 'es-419',
    setLanguage: vi.fn(),
  })),
}));

describe('LanguageSelector Component', () => {
  it('renders language options', () => {
    render(<LanguageSelector />);
    expect(screen.getByText('🌎')).toBeInTheDocument();
  });

  it('calls setLanguage when selecting a language', () => {
    const setLanguage = vi.fn();
    vi.mocked(useLanguageStore).mockReturnValue({
      currentLanguage: 'es-419',
      setLanguage,
    });

    render(<LanguageSelector />);
    
    // Open dropdown
    fireEvent.click(screen.getByRole('button'));
    
    // Select English
    fireEvent.click(screen.getByText(/English/i));
    
    expect(setLanguage).toHaveBeenCalledWith('en');
  });
});