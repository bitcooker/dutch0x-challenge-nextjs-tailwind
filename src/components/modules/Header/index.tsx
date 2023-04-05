import React from 'react';
import { useRouter } from 'next/router';
import {
  ComingSoon,
  Container,
  Logo,
  NavBar,
  NavItem,
  SearchBox,
  ToolContainer,
} from './styles';
import { TNav } from '@/types/nav';
import { navs } from '@/constants/data';
import Input from '@/components/elements/Input';
import {
  AlertIcon,
  SearchIcon,
  ShortkeyIcon,
  UserIcon,
  WalletIcon,
} from '@/components/elements/Svg/svg';
import Badge from '@/components/elements/Badge';
import IconButton from '@/components/elements/IconButton';

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <Container>
      <Logo src="/images/logo.svg" width={145} height={36} alt="Logo" />
      <NavBar>
        {navs.map((nav: TNav) => (
          <NavItem key={nav.slug} active={router.asPath === nav.slug ? 1 : 0}>
            {nav.text}
            {nav.slug === 'marketplace' && (
              <ComingSoon>Comming Soon</ComingSoon>
            )}
          </NavItem>
        ))}
      </NavBar>

      <SearchBox>
        <Input
          placeholder="Find Holders"
          leftIcon={<SearchIcon />}
          rightIcon={<ShortkeyIcon />}
        />
      </SearchBox>

      <ToolContainer>
        <Badge variant="success" label="Status" />
        <IconButton icon={AlertIcon} />
        <IconButton icon={WalletIcon} />
        <IconButton icon={UserIcon} />
      </ToolContainer>
    </Container>
  );
};

export default Header;
