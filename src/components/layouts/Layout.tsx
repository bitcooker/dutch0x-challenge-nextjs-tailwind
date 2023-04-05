import React from 'react';
import { AppContainer, ContentContainer } from './styles';
import Header from '../modules/Header';
interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props:ILayoutProps) => {
    const { children } = props;
    return(
        <AppContainer>
            <Header/>
            <ContentContainer>
                { children }
            </ContentContainer>
        </AppContainer>
    );
}

export default Layout;
