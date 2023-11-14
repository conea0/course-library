// 生徒情報のフォーム
"use client";
import { FC, useState, ChangeEvent, FormEvent } from "react";
import { Form, Input, Button } from "antd";
import styles from "./StudentForm.module.css";

interface StudentFormProps {
  onSubmit: (data: any) => void;
}

const StudentForm: FC<StudentFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    contact: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear the form after submission
    setFormData({ name: "", username: "", contact: "" });
  };

  return (
    <Form onFinish={handleSubmit} className={styles.formContainer}>
      <Form.Item
        label="名前"
        name="name"
        rules={[{ required: true, message: "名前を入力してください" }]}
      >
        <Input
          onChange={handleChange}
          value={formData.name}
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        label="ユーザーネーム"
        name="username"
        rules={[
          { required: true, message: "ユーザーネームを入力してください" },
        ]}
      >
        <Input
          onChange={handleChange}
          value={formData.username}
          className={styles.input}
        />
      </Form.Item>
      <Form.Item
        label="連絡先"
        name="contact"
        rules={[{ required: true, message: "連絡先を入力してください" }]}
      >
        <Input
          onChange={handleChange}
          value={formData.contact}
          className={styles.input}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button}>
          追加
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StudentForm;
