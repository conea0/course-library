import { ProblemBox } from "@/components/problemBox/problemBox";
import { problemProps } from "@/types";
import "./globals.css"; // アプリケーションのスタイルをインポート
import { LoginForm } from "@/components/Login/LoginForm";
import Link from "next/link";

export default function Home() {
  return <LoginForm />;
}
