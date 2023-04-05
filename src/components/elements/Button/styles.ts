import styled from 'styled-components';

export type TButtonVariant = 'solid' | 'outline';

const buttonStyle = {
  solid: 'background-color: black; color: white;',
  outline: 'border: 1px solid #000000; color: black;',
};

interface IButtonContainerProps {
  variant: TButtonVariant;
}

export const ButtonContainer = styled.div.attrs({
  className:
    'px-4 h-10 rounded-lg inline-flex items-center justify-center outline-none cursor-pointer',
})`
  ${(props: IButtonContainerProps) => buttonStyle[props.variant]}
`;
