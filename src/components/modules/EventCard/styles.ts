import styled from 'styled-components';
import Image from 'next/image';
import { EventStatus } from '@/types/event';

interface IStatusBadgeProps {
  status: EventStatus;
}

const eventStatusPallate = {
  done: 'background-color: #28458F;',
  progress: 'background-color: #3CAA2A',
};

export const Container = styled.div.attrs({
  className: 'relative overflow-hidden shadow-md ',
})``;

export const Content = styled.div.attrs({
  className: 'relative flex gap-8 bg-white/80 backdrop-blur-xl',
})``;

export const Header = styled.div.attrs({
  className: 'flex items-center gap-2',
})``;

export const Detail = styled.div.attrs({
  className: 'relative py-6 pl-6 flex flex-col grow',
})``;

export const StatusBadge = styled.div.attrs({
  className: 'h-7 -ml-6 pl-6 pr-2 rounded-r-lg flex items-center gap-1',
})`
  ${(props: IStatusBadgeProps) => eventStatusPallate[props.status]}
`;

export const StatusBadgeLabel = styled.span.attrs({
  className: 'text-xs whitespace-nowrap font-bold text-white uppercase mt-0.5',
})``;

export const DateContainer = styled.div.attrs({
  className:
    'h-7 rounded-lg px-2.5 gap-2.5 bg-black/10 backdrop-blur-xl flex items-center ',
})``;

export const DateLabel = styled.span.attrs({
  className: 'text-sm whitespace-nowrap font-bold text-black',
})``;

export const StartedDateContainer = styled.div.attrs({
  className: 'flex items-center gap-2.5 text-black/70 px-3',
})``;

export const StartedDateLabel = styled.span.attrs({
  className: 'text-sm whitespace-nowrap font-bold',
})``;

export const StartedDateTimeLabel = styled.span.attrs({
  className: 'font-normal',
})``;

export const Description = styled.p.attrs({ className: 'mt-3' })``;

export const NameContainer = styled.div.attrs({
  className: 'flex items-end gap-2.5 mt-2',
})``;

export const Name = styled.h1.attrs({
  className: 'text-3xl whitepsace-nowrap font-bold leading-none',
})``;

export const Amount = styled.span.attrs({
  className: 'text-sm whitespace-nowrap',
})``;

export const TransactionsContainer = styled.div.attrs({
  className: 'flex items-center gap-4 text-sm mt-3',
})``;

export const TransactionAmountLabel = styled.span.attrs({
  className: 'font-bold',
})``;

export const Progress = styled.div.attrs({
  className: 'mt-3',
})``;

export const CardImage = styled(Image).attrs({
  className: 'py-6 pr-6',
})`
  width: 300px;
`;

export const ToolsContainer = styled.div.attrs({
  className: 'flex items-center gap-2 mt-4',
})``;

export const CardBackImage = styled(Image).attrs({
  className: 'absolute left-1/2 top-0 -translate-x-1/2 -z-10',
})``;
