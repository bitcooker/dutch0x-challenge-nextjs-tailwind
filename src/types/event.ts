export enum EventStatus {
  done = 'done',
  progress = 'progress',
}

export type TEvent = {
  id: number;
  name: string;
  image: string;
  description: string;
  amount: number;
  transactions_success: number;
  transactions_processing: number;
  transactions_failed: number;
  progress: number;
  status: EventStatus;
  started_at: number;
};
