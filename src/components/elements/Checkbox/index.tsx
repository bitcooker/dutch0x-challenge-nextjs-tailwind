import React from 'react';

import { CheckTickIcon } from '@/components/elements/Svg/svg';
import { Box, Container, Label } from './styles';

interface CheckboxProps {
  checked: boolean;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, label }) => {
  return (
    <Container>
      <Box checked={checked}>{checked && <CheckTickIcon />}</Box>
      <Label>{label}</Label>
    </Container>
  );
};

export default Checkbox;
