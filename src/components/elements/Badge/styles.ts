import styled from 'styled-components';

export type TBadgeVariant = 'success' | 'warning' | 'error' | 'info';
interface IBadgeContainerProps {
  variant: TBadgeVariant;
}

const colors = {
  success: 'background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;',
  warning: 'background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;',
  info: 'background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;',
  error: 'background-color: rgba(60, 170, 42, 0.2); color: #3CAA2A;',
};

const bullets = {
  success: 'background-color: #3CAA2A;',
  warning: 'background-color: #3CAA2A;',
  info: 'background-color: #3CAA2A;',
  error: 'background-color: #3CAA2A;',
};

export const BadgeContainer = styled.div.attrs({
  className: `relative h-7 pl-5 pr-2 rounded inline-flex items-center justify-center text-xs font-bold whitespace-nowrap uppercase`,
})`
  ${(props: IBadgeContainerProps) => colors[props.variant]}

  &::after {
    position: absolute;
    top: 50%;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translateY(-4px);
    content: '';
    ${(props: IBadgeContainerProps) => bullets[props.variant]}
  }
`;
