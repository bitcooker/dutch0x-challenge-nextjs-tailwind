export type TOverviewItem = {
  name: string;
  value?: string;
};

export type TOverview = {
  title?: string;
  items: TOverviewItem[];
};
