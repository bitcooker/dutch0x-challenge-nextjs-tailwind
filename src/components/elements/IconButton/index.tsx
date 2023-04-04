import React from 'react';
import { IconButtonContainer } from './styles';

interface IIconButtonProps {
  icon: JSX.Element;
}

const IconButton: React.FC<IIconButtonProps> = (props: IIconButtonProps) => {
  const { icon } = props;
  return <IconButtonContainer>{icon}</IconButtonContainer>;
};

export default IconButton;
