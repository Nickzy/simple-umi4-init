import React, { useRef, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'umi';
import './index.scss';

interface loginInfo {
  username: string
  password: string
}

export  default function Login<React, FC> (): JSX.Element {

  const navigate = useNavigate();

  function loginFn (params: loginInfo) {
    console.log('params', params)
    setTimeout(() => {
      message.success('登陆成功')
      navigate('/home', { replace: true })
    }, 500)
  }

  return (<div className='login-wrap'>
    <Form 
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={loginFn}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  </div>)
}
