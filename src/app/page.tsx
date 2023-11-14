'use client'
import { Heading } from '@/components/heading/heading';
import './globals.css'; // アプリケーションのスタイルをインポート
import { LoginForm } from '@/components/Login/LoginForm';
import { ProblemCard } from '@/components/markdownBox/markdownBox';

import { Editor } from "@/components/ace";
import { useState } from 'react';

export default function Home() {
  const [glsl, setGlsl] = useState(``);
  return (
    <main>
      <div className="right">
        <Heading subtitle='part1 / 002 「print("HELLO WORLD")から始まり、print関数の使い方を覚える」'> HELLO WORLD</Heading>
        <ProblemCard part={1} unit={2} id={2}/>
        <Heading subtitle='環境構築をしよう'>解説</Heading>
        <ProblemCard part={1} unit={2} id={3}/>
      </div>
      <div className="left">
      <Editor
        mode="glsl"
        theme="twilight"
        value={"glsl"}
        onChange={(v: any) => setGlsl(v)}
        name="ace_editor"
        editorProps={{ $blockScrolling: true }}
        style={{ width: "100%" }}
      />
      </div>
    </main>
  );
}
