'use client'
import { Form, Input, Button } from "antd";
import style from './LoginForm.module.css'

export const LoginForm = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // ログインロジックをここに実装
  };

  return (
    <div>
        <h1 className={style.company}>CONEA</h1>
        <h3 className={style.appName}>programming</h3>
    <Form name="login-form" onFinish={onFinish} className={style.loginForm}>
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
        <Button type="primary" htmlType="submit" className={style.loginButton}>
          ログイン
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
