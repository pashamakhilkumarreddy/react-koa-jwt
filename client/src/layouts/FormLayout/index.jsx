import React from 'react';
import {Row, Col} from 'antd';

import './formlayout.scss';

const FormLayout = ({children}) => (
  <Row align='middle' justify='center' className='mt-6'>
    <Col xs={22} sm={18} md={12} lg={10} xl={10}>
      {children}
    </Col>
  </Row>
);

export default FormLayout;
