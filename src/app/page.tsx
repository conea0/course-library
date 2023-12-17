import { ProblemBox } from "@/components/problemBox/problemBox";
import { problemProps } from "@/types";
import "./globals.css"; // アプリケーションのスタイルをインポート
import { LoginForm } from "@/components/Login/LoginForm";
import StudentListPage from "@/components/StudentForm/StudentListPage";
import Link from "next/link";
import { ProblemPage } from "@/components/problemPage/problemPage";
export default function Home() {
  return (
    <LoginForm />
  );
}
