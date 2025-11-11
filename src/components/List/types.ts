import type { ReactNode } from 'react';

type ListItem = { icon: ReactNode; text: string };

export type ListProps = {
  items: ListItem[];
};
