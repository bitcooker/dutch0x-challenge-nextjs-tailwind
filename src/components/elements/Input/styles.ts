import styled from 'styled-components';

interface IInputContainerProps {
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
}

export const InputContainer = styled.div.attrs({
  className:
    'relative w-full inline-flex items-center justify-center h-9 border border-black/20 rounded-lg',
})`
  padding: 6px;
  ${(p: IInputContainerProps) =>
    p.isLeftIcon && 'padding-left: 46px !important;'}
  ${(p: IInputContainerProps) =>
    p.isRightIcon && 'padding-right: 40px !important;'}
`;

export const InputElement = styled.input.attrs({
  className: 'w-full outline-none',
})``;

export const LeftIconContainer = styled.div.attrs({
  className: 'absolute px-3 inline-flex items-center justify-center',
})`
  left: 6px;
  top: 6px;
  bottom: 6px;
`;

export const RightIconContainer = styled.div.attrs({
  className: 'absolute inline-flex items-center justify-center',
})`
  top: 6px;
  bottom: 6px;
  right: 6px;
`;
