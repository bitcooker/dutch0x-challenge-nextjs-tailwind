import React from 'react';
import { BadgeContainer } from './styles';
import { TBadgeVariant } from './styles';

interface IBadgeProps {
  variant: TBadgeVariant;
  label: string;
}

const Badge: React.FC<IBadgeProps> = (props: IBadgeProps) => {
  const { variant, label } = props;
  return <BadgeContainer variant={variant}>{label}</BadgeContainer>;
};

export default Badge;
