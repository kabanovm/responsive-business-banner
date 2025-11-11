import type { ReactNode } from 'react';

export type ListItem = {
  icon: ReactNode;
  text: string;
  id: string;
};

export type ListProps = {
  items: ListItem[];
};
