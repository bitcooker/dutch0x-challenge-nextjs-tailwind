import React from 'react';
import { AppContainer, ContentContainer } from './styles';
// import { Header } from './Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props:LayoutProps) => {
    const { children } = props;
    return(
        <AppContainer>
            
            <ContentContainer>
                { children }
            </ContentContainer>
        </AppContainer>
    );
}

export default Layout;
