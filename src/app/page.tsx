import { ProblemBox } from '@/components/problemBox/problemBox';
import './globals.css'; // アプリケーションのスタイルをインポート
import { LoginForm } from '@/components/Login/LoginForm';

export default function Home() {
  return (
    <div>
      {/* <LoginForm /> */}
      <ProblemBox part={0} unit={0} id={0} />

    </div>
  );
}
