import React, {useState} from 'react';
import {Menu} from 'antd';
import {LoginOutlined, HomeOutlined, LogoutOutlined} from '@ant-design/icons';

import './header.scss';

const Header = () => {
  const [currentItem, setCurrentItem] = useState('home');
  return (
    <Menu
      mode='horizontal'
      selectedKeys={[currentItem]}
      onClick={(e) => setCurrentItem(e.key)}
      className={'header'}>
      <Menu.Item icon={<HomeOutlined />} key='home'>
        Home
      </Menu.Item>
      <Menu.Item icon={<LoginOutlined />} key='login'>
        Log In
      </Menu.Item>
      <Menu.Item icon={<LogoutOutlined />} key='logout' danger='true'>
        Log Out
      </Menu.Item>
    </Menu>
  );
};

export default Header;
