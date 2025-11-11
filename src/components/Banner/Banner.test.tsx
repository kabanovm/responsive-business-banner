import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Banner from './Banner';

vi.mock('@assets/icons/close.svg?react', () => ({
  default: () => <span data-testid="close-icon">X</span>,
}));

vi.mock('@assets/icons/check.svg?react', () => ({
  default: () => <span data-testid="check-icon">✓</span>,
}));

describe('Banner', () => {
  it('closes when close button is clicked', async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Banner onClose={handleClose} />);

    const closeButton = screen.getByLabelText('close banner');
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it('renders Apply Now button', () => {
    const handleClose = vi.fn();
    render(<Banner onClose={handleClose} />);

    expect(screen.getByRole('button', { name: /apply now/i })).toBeInTheDocument();
  });
  it('renders More Information link', () => {
    const handleClose = vi.fn();
    render(<Banner onClose={handleClose} />);

    const link = screen.getByRole('link', { name: /more information/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://finom.co');
  });
});
