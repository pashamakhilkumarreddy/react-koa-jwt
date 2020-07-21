import React from 'react';
import {Layout} from 'antd';

import Routes from './routes/';
import AppHeader from './components/common/Header';
import AppFooter from './components/common/Footer';

const { Header, Footer, Content } = Layout;

const App = () => {
  return (
    <>
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </>
  );
}

export default App;
