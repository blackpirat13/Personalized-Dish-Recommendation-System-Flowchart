import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the title in Spanish by default', () => {
    render(<App />);
    expect(screen.getByText('Sistema de Recomendación de Platos Personalizado')).toBeInTheDocument();
  });

  it('changes language when selecting English', async () => {
    render(<App />);
    
    // Open language selector
    const languageButton = screen.getByRole('button', { name: /🌎/i });
    fireEvent.click(languageButton);
    
    // Select English
    const englishOption = screen.getByText(/English/i);
    fireEvent.click(englishOption);
    
    // Verify title changed to English
    expect(screen.getByText('Personalized Dish Recommendation System')).toBeInTheDocument();
  });
});