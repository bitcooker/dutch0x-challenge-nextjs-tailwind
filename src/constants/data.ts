import { TNav } from '@/types/nav';

export const navs: TNav[] = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    slug: '/',
  },
  {
    text: 'Create',
    path: '/create',
    slug: 'create',
  },
  {
    text: 'Marketplace',
    path: '/marketplace',
    slug: 'marketplace',
  },
  {
    text: 'Learn',
    path: '/learn',
    slug: 'learn',
  },
];

const events: Event[] = [
  {
    id: 1,
    name: 'Manure',
    image: 'manure',
    description: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    amount: 100,
    transactions_s: 44,
    transactions_p: 8,
    transactions_f: 2,
    progress: 40,
    status: EventStatus.progress,
    started_at: 1677423135535,
  },
  {
    id: 2,
    name: 'Water',
    image: 'water',
    description: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    amount: 100,
    transactions_s: 100,
    transactions_p: 0,
    transactions_f: 0,
    progress: 100,
    status: EventStatus.done,
    started_at: 1677423115535,
  },
];
