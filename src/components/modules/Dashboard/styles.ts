import styled from 'styled-components';

export const DashboardContainer = styled.div.attrs({
  className: 'relative flex flex-col',
})``;

export const DashboardContent = styled.div.attrs({
  className: 'p-6 flex gap-6',
})``;

export const EventsContainer = styled.div.attrs({
  className: 'relative flex flex-col gap-2 grow',
})``;

export const EventsHeader = styled.h1.attrs({
  className: 'text-2xl whitespace-nowrap text-black/50',
})``;

export const EventsContent = styled.div.attrs({
  className: 'flex flex-col gap-6',
})``;

export const OverviewContainer = styled.div.attrs({
  className: 'w-1/4 relative flex flex-col gap-2',
})``;

export const OverviewHeader = styled.h1.attrs({
  className: 'text-2xl whitespace-nowrap text-black/50',
})``;

export const OverviewContent = styled.div.attrs({
  className: 'flex flex-col gap-6',
})``;

export const BannerContainer = styled.div.attrs({
  className: 'px-6 pb-6 border-b border-black/10 bg-white flex',
})`
  padding-top: 84px;
`;

export const BannerContent = styled.div.attrs({
  className: 'w-full grid grid-cols-5 gap-4',
})``;
