import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useEscapeClose } from './useEscapeClose';

describe('useEscapeClose', () => {
  it('calls onClose when Escape is pressed', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeClose(onClose));
    await user.keyboard('{Escape}');

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('ignores other keys', async () => {
    const onClose = vi.fn();
    const user = userEvent.setup();

    renderHook(() => useEscapeClose(onClose));

    await user.keyboard('{Enter}');
    await user.keyboard('a');
    await user.keyboard('{Space}');

    expect(onClose).not.toHaveBeenCalled();
  });
});
