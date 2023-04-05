import React from 'react';
import { InfoButtonContainer } from './styles';

interface IInfoButtonProps {
  icon: JSX.Element;
}

const InfoButton: React.FC<IInfoButtonProps> = (props: IInfoButtonProps) => {
  const { icon } = props;
  return <InfoButtonContainer>{icon}</InfoButtonContainer>;
};

export default InfoButton;
