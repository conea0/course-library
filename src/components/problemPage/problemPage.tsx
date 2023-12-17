import { Editor } from "@/components/editor/editor";
import { Heading } from "@/components/heading/heading";
import { ProblemBox } from "@/components/problemBox/problemBox";
import ProblemPageStyle from "./probemPage.module.css";
import { ProblemPageHeader } from "./problemPageHeader/problemPageHeader";

export const ProblemPage =() =>{
  const hoge = {
    part:0,
    unit:0,
    id:0
  }

  return (
    <div>
      <ProblemPageHeader />
      <div className={ProblemPageStyle.content}>
        <div className={ProblemPageStyle.left}>
          <Heading subtitle="Part1 / Pythonの基本文法について学ぼう">Print文について学ぼう</Heading>
          <h2>問題</h2>
          <ProblemBox problemProps={hoge} />
        </div>
        <div className={ProblemPageStyle.right}>
          <h3>コード</h3>
          <Editor />
        </div>
      </div>
    </div>
  );
}