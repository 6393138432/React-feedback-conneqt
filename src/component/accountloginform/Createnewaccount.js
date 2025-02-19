import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';

const { Option } = Select;
const residences = [
  {
    value: 'country',
    label: 'Country',
    children: [
      {
        value: 'state',
        label: 'State',
        children: [
          {
            value: 'city',
            label: 'City',
          },
        ],
      },
    ],
  },
  {
    value: 'india',
    label: 'India',
    children: [
      {
        value: 'uttarpradesh',
        label: 'Uttar Pradesh',
        children: [
          {
            value: 'lalitpur',
            label: 'Lalitpur',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Createnewaccount = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null); // State to store form data

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setFormData(values); // Store form data in state
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ['zhejiang', 'hangzhou', 'xihu'],
          prefix: '91',
        }}
        style={{
          maxWidth: 600,
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered does not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="residence"
          label="Habitual Residence"
          rules={[
            {
              type: 'array',
              required: true,
              message: 'Please select your habitual residence!',
            },
          ]}
        >
          <Cascader options={residences} />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item
          name="intro"
          label="Intro"
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

      {/* Display form data after submission */}
       {formData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Form Data:</h3>
          <ul>
            {Object.keys(formData).map((key) => (
              <li key={key}>
                <strong>{key}:</strong> {JSON.stringify(formData[key])}
              </li>
            ))}
          </ul>
        </div>
      )} 
    </div>
  );
};

export default Createnewaccount;
