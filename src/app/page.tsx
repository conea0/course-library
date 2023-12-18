import { ProblemBox } from "@/components/problemBox/problemBox";
import "./globals.css"; // アプリケーションのスタイルをインポート

export default function Home() {
  return (
    <div>
      <ProblemBox part={0} unit={0} id={0} />
    </div>
  );
}
