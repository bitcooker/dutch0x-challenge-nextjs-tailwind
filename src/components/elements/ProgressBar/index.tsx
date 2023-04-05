import React from 'react';
import { ProgressBarContainer, Track } from './styles';

interface IProgressBarProps {
  percent: number;
}

const ProgressBar: React.FC<IProgressBarProps> = (props: IProgressBarProps) => {
  const { percent } = props;
  return (
    <ProgressBarContainer>
      <Track percent={percent} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
