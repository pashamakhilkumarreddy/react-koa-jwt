import React, { memo } from 'react';
import { Typography } from 'antd';

import './footer.scss';

const Footer = () => 
  <footer className='footer flex-center'>
    <div className='text-center'>
      <Typography.Paragraph strong='true' >
        &copy; 2020 React Koa JWT
      </Typography.Paragraph>
    </div>
  </footer>

export default memo(Footer);