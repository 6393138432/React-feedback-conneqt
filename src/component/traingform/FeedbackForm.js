import React, { useState } from "react";
import { Modal, Form, Input, Button, Rate } from "antd";

const FeedbackForm = ({ isModalOpen, handleClose, handleSubmit }) => {
  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);

  const handleFinish = (values) => {
    handleSubmit({ ...values, rating });
    form.resetFields();
    setRating(0);
  };

  return (
    <Modal title="Submit Feedback" open={isModalOpen} onCancel={handleClose} footer={null}>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Enter your name" }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email" rules={[
          { required: true, message: "Enter your email" },
          { type: "email", message: "Enter a valid email" },
        ]}>
          <Input />
        </Form.Item>

        <Form.Item label="Message" name="message" rules={[{ required: true, message: "Enter your message" }]}>
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item label={<span>Rating: <strong>{rating || "Select"}</strong></span>} name="rating"
          rules={[{ required: true, message: "Please select a rating" }]}>
          <Rate allowHalf value={rating} onChange={setRating} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default FeedbackForm;
