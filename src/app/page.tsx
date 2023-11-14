import "./globals.css"; // アプリケーションのスタイルをインポート
import { LoginForm } from "@/components/Login/LoginForm";
import StudentListPage from "./components/StudentForm/StudentListPage";

export default function Home() {
  return (
    <div>
      <LoginForm />
      <StudentListPage />
    </div>
  );
}
