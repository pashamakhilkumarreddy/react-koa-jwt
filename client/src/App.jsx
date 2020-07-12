import React from 'react';
import { Button } from 'antd';

import Routes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
