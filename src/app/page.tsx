import { ProblemBox } from "@/components/problemBox/problemBox";
import { problemProps } from "@/types";
import './globals.css'; // アプリケーションのスタイルをインポート
import { LoginForm } from '@/components/Login/LoginForm';
import StudentListPage from '@/components/StudentForm/StudentListPage';
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <LoginForm />
      <StudentListPage />
    </div>
  );
}
