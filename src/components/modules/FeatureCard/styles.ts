import styled from 'styled-components';

export type TFeatureCardVariant =
  | 'green'
  | 'yellow'
  | 'sky'
  | 'purple'
  | 'pink';

interface IFeatureCardProps {
  variant: TFeatureCardVariant;
}

const pallate = {
  green:
    'background: linear-gradient(0deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), #2EC62E;',
  yellow: 'background-color: #F5D72E50;',
  sky: 'background-color: #2EC4DA50;',
  purple: 'background-color: #A74CC950;',
  pink: 'background-color: #EF4FAD50;',
};

export const FeatureCardContainer = styled.div.attrs({
  className: 'group gap-2 flex flex-col',
})``;

export const FeatureCardSymbol = styled.div.attrs({
  className: 'rounded-lg flex items-center justify-center',
})`
  ${(props: IFeatureCardProps) => pallate[props.variant]}

  height: 152px;
`;

export const LabelContainer = styled.div.attrs({
  className: 'relative text-center',
})``;

export const FeatureCardLable = styled.span.attrs({
  className: 'font-bold whitespace-nowrap text-center',
})``;
