import React from 'react';
import { Spin } from './styles';

interface ISpinProps {
  children: React.ReactNode;
}

const SpinIcon: React.FC<ISpinProps> = (props: ISpinProps) => {
  const { children } = props;
  return <Spin>{children}</Spin>;
};

export default SpinIcon;
