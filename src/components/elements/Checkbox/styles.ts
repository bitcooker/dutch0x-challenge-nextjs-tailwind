import styled from 'styled-components';

interface ICheckboxProps {
  checked: boolean;
}

export const Container = styled.div.attrs({
  className: 'flex items-center',
})``;

export const Box = styled.div.attrs({
  className: 'inline-flex items-center justify-center gap-1 rounded-sm mx-2',
})`
  width: 14px;
  height: 14px;

  ${(props: ICheckboxProps) =>
    props.checked ? 'background-color: black;' : 'border: 1px solid black;'}
`;

export const Label = styled.div.attrs({
  className: 'text-black whitespace-nowrap',
})``;
