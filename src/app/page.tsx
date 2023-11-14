import "./globals.css"; // アプリケーションのスタイルをインポート
import { LoginForm } from '@/components/Login/LoginForm';
import StudentListPage from "@/app/components/StudentForm/StudentListPage";

export default function Home() {
  return (
    <div>
      <LoginForm />
      <StudentListPage />
    </div>
  );
}
