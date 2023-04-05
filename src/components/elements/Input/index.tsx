import React from 'react';
import {
  InputContainer,
  LeftIconContainer,
  RightIconContainer,
  InputElement,
} from './styles';

interface IInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
}

const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const { leftIcon, rightIcon, placeholder } = props;
  const isLeftIcon = !!leftIcon;
  const isRightIcon = !!rightIcon;

  return (
    <InputContainer isLeftIcon={isLeftIcon} isRightIcon={isRightIcon}>
      {isLeftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
      <InputElement placeholder={placeholder} />
      {isRightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
    </InputContainer>
  );
};

export default Input;
