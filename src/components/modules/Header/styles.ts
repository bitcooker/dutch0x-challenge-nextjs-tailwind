import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface INavLinkProps {
  active: number;
}

export const Container = styled.div.attrs({
  className:
    'fixed left-0 top-0 z-50 w-full p-6 backdrop-blur-sm flex items-center',
})``;

export const Logo = styled(Image).attrs({
  className: '',
})``;

export const NavBar = styled.nav.attrs({
  className: 'space-x-8 px-8 flex items-center',
})``;

export const NavItem = styled(Link).attrs({
  className: 'relative text-black/60 hover:text-black',
})`
  && {
    ${(p: INavLinkProps) => p.active && 'color: black; font-weight: 700;'}

    &::after {
      position: absolute;
      left: 50%;
      top: 100%;
      width: 5px;
      height: 5px;
      transform: translateX(-50%) translateY(1px);
      border-radius: 50%;
      background-color: #ff4800;
      content: '';
    }
  }
`;

export const ComingSoon = styled.span.attrs({
  className: 'absolute left-0 top-5 text-xs text-primary whitespace-nowrap',
})``;

export const ToolContainer = styled.div.attrs({
  className: 'space-x-8 ml-auto flex items-center',
})``;

export const SearchBox = styled.div.attrs({
  className: 'w-2/5 mx-1 flex',
})``;
