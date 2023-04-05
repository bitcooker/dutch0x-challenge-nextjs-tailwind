import styled from 'styled-components';

export const Container = styled.div.attrs({
  className:
    'relative w-full rounded-lg bg-white border border-black/10 shadow-sm flex flex-col',
})``;

export const Header = styled.div.attrs({
  className: 'pl-6 pr-4 py-3 flex',
})``;

export const HeaderLabel = styled.span.attrs({
  className: 'text-xl whitespace-nowrap text-black',
})``;

export const List = styled.div.attrs({ className: 'flex flex-col' })``;

export const ListItem = styled.div.attrs({
  className: 'pl-6 pr-4 py-3 flex items-center justify-between cursor-pointer',
})``;

export const ListItemName = styled.span.attrs({
  className: 'text-black/60 whitespace-nowrap',
})``;

export const ListItemRight = styled.div.attrs({
  className: 'flex gap-5 items-center',
})``;

export const ListItemValue = styled.span.attrs({
  className: 'text-black whitespace-nowrap',
})``;
