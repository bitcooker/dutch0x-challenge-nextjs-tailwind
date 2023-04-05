import React from 'react';
import {
  FeatureCardContainer,
  FeatureCardLable,
  FeatureCardSymbol,
  LabelContainer,
  TFeatureCardVariant,
} from './styles';
import InfoButton from '@/components/elements/InfoButton';
import { AlertIcon, InfomationIcon } from '@/components/elements/Svg/svg';

interface IFeatureCardProps {
  variant: TFeatureCardVariant;
  icon: JSX.Element;
  label: string;
}

const FeatureCard: React.FC<IFeatureCardProps> = (props: IFeatureCardProps) => {
  const { variant, icon, label } = props;
  return (
    <FeatureCardContainer>
      <FeatureCardSymbol variant={variant}>{icon}</FeatureCardSymbol>
      <LabelContainer>
        <InfoButton icon={InfomationIcon}></InfoButton>
        <FeatureCardLable>{label}</FeatureCardLable>
      </LabelContainer>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
