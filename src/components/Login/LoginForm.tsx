'use client'
import { Form, Input, Button } from "antd";
import LoginStyle from './LoginForm.module.css'

export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // ログインロジックをここに実装
  };

  return (
    <div className={LoginStyle.login}>
      <h1 className={LoginStyle.company}>CONEA</h1>
      <h3 className={LoginStyle.appName}>Course - Library</h3>
      <Form name="login-form" onFinish={onFinish} className={LoginStyle.loginForm}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "ユーザー名を入力してください" }]}
        >
          <Input placeholder="ユーザー名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "パスワードを入力してください" }]}
        >
          <Input.Password placeholder="パスワード" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={LoginStyle.loginButton}>
            ログイン
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
