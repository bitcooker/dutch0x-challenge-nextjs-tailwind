import { EventStatus, TEvent } from '@/types/event';
import { TNav } from '@/types/nav';
import { TOverview } from '@/types/overview';

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

export const events: TEvent[] = [
  {
    id: 1,
    name: 'Manure',
    image: 'manure.gif',
    description: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    amount: 100,
    transactions_success: 44,
    transactions_processing: 8,
    transactions_failed: 2,
    progress: 40,
    status: EventStatus.progress,
    started_at: 1677423135535,
  },
  {
    id: 2,
    name: 'Water',
    image: 'water.gif',
    description: '🍎🍌🍍The Fruit Salad Game🍆🥦🥕',
    amount: 100,
    transactions_success: 100,
    transactions_processing: 0,
    transactions_failed: 0,
    progress: 100,
    status: EventStatus.done,
    started_at: 1677423115535,
  },
];

export const overviews: TOverview[] = [
  {
    items: [
      {
        name: 'Wallet balance',
        value: '0.489 ETH',
      },
    ],
  },
  {
    title: 'NFTs',
    items: [
      {
        name: 'NFT items',
        value: '187',
      },
      {
        name: 'Collections',
        value: '5',
      },
      {
        name: 'Minted',
        value: '39',
      },
    ],
  },
  {
    title: 'Saved Searches',
    items: [
      {
        name: 'Green apple',
      },
      {
        name: 'Christmas tree',
      },
    ],
  },
  {
    title: 'Recent Activity',
    items: [
      {
        name: 'Settings > Account',
      },
      {
        name: 'Sales reports',
      },
    ],
  },
];
