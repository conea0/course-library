"use client"
import './globals.css'; // アプリケーションのスタイルをインポート
import LoginForm from './components/Login/LoginForm';

export default function Home() {
  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}