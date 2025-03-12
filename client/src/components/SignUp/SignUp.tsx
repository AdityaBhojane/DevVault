import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { useTheme } from '../../zustand/Theme Store/useTheme';


type FieldType = {
  username?: string;
  Email?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignUp: React.FC = () => {

  const currentTheme = useTheme(state=> state.currentTheme)
  
  return(
  <div className={`p-10 rounded-2xl ${currentTheme? "border border-[#ccc]":"border border-[#000]"}`}>
    <Form
      name="basic"
      labelCol={{ span: 33 }}
      wrapperCol={{ span: 55 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username !' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input your email !' }]}

      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password !' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className='w-full'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);}

export default SignUp;