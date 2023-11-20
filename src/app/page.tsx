import { ProblemBox } from '@/components/problemBox/problemBox';
import './globals.css'; // アプリケーションのスタイルをインポート
import { LoginForm } from '@/components/Login/LoginForm';
import { PageChangegButton } from '@/components/pageChangeButton copy/pageChangeButton';
import { Heading } from '@/components/heading/heading';
import { Editor } from '@/components/editor/editor';


export default function Home() {
  return (
    <div>
      {/* <LoginForm /> */}
      <Heading subtitle='環境構築をしよう'>PCにPythonをインストールしよう</Heading>
      <PageChangegButton />
      <ProblemBox part={0} unit={0} id={0} />
      <Editor></Editor>
    </div>
  );
}
