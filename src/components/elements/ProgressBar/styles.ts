import styled from 'styled-components';

interface ITrackProps {
  percent: number;
}

export const ProgressBarContainer = styled.div.attrs({
  className: 'relative w-full h-4 rounded-lg bg-black/10 flex',
})``;

export const Track = styled.div.attrs({
  className: 'absolute top-0 left-0 h-4 rounded-lg ',
})`
  background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 100%
    ),
    #ff4800;
  background-blend-mode: overlay, normal;

  ${(props: ITrackProps) => `width: ${props.percent}%;`}
`;
