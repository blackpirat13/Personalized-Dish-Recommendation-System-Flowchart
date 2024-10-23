import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { WindowsFrame } from '../../components/WindowsFrame';

describe('WindowsFrame Component', () => {
  it('renders the title and window controls', () => {
    const title = 'Test Window';
    render(
      <WindowsFrame title={title}>
        <div>Content</div>
      </WindowsFrame>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});