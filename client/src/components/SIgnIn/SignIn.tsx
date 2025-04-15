import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useTheme } from '../../zustand/Theme Store/useTheme';
import { useNavigate } from 'react-router-dom';


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

  const currentTheme = useTheme(state=> state.currentTheme);
  const navigate = useNavigate()
  
  return(
  <div className={`p-10 w-1/3 rounded-2xl font-semibold ${currentTheme? "":""}`}>
    <Form
      name="basic"
      labelCol={{ span: 33 }}
      wrapperCol={{ span: 55 }}
      style={{ width: 400 }}
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
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password !' }]}
      >
        <Input.Password />
      </Form.Item>

      <div className="text-center pb-4">
        <p className='font-normal'>Don't have an account? <span onClick={()=>navigate("/auth/signup")} className='text-blue-400 font-semibold cursor-pointer'>sign up</span></p>
      </div>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit" className='w-full'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);}

export default SignUp;