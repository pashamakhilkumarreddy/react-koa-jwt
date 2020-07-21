import React, {Component} from 'react';
import {Form, Input, Button, Checkbox, Typography} from 'antd';
import {MailOutlined, LockOutlined} from '@ant-design/icons';

import FormLayout from '../../layouts/FormLayout';

const validateMessages = {
  required: '${label} is required',
  types: {
    email: '${label} is not a valid email',
    password: '${label} is not a valid password'
  }
}

export default class Login extends Component {
  render() {
    return (
      <FormLayout>
        <Form className='form' name="loginForm" validateMessages={validateMessages}>
          <Typography.Title className='text-center'>Login</Typography.Title>
          <Form.Item label='Email' name='email' rules={
            [
              {
                required: true,
              },
              {
                type: 'email'
              }
            ]
          }>
            <Input
              prefix={<MailOutlined className='email-icon' />}
              placeholder='Please enter your email'
            />
          </Form.Item>
          <Form.Item label='Password' name='password' rules={
            [
              {
                required: true,
              }
            ]
          }>
            <Input.Password
              prefix={<LockOutlined />}
              placeholder='Please enter your password'
            />
          </Form.Item>
          <Form.Item name='remember'>
            <Checkbox>Remember me</Checkbox>
            <a href='#' className='forgot-password'>
              Forgot Password?
            </a>
          </Form.Item>
          <Form.Item className="flex-center">
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
            <Button type='default' htmlType='button'>
              Register
            </Button>
          </Form.Item>
        </Form>
      </FormLayout>
    );
  }
}
