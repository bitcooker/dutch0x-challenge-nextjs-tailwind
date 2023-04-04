import React from 'react';
import { ButtonContainer, TButtonVariant } from './styles';

interface IButtonProps {
  variant: TButtonVariant;
  lablel: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { variant, lablel } = props;
  return <ButtonContainer variant={variant}>{lablel}</ButtonContainer>;
};

export default Button;
