import { Editor } from "@/components/editor/editor";
import { Heading } from "@/components/heading/heading";
import { ProblemBox } from "@/components/problemBox/problemBox";
import ProblemPageStyle from "./probemPage.module.css";

export const ProblemPage =() =>{
  const hoge = {
    part:0,
    unit:0,
    id:0
  }
  return (
    <div className={ProblemPageStyle.content}>
      <div className={ProblemPageStyle.left}>
        <Heading subtitle="【Part1】Pythonの基本文法について学ぼう">Print文について学ぼう</Heading>
        <ProblemBox problemProps={hoge} />
      </div>
      <div className={ProblemPageStyle.right}>
        <div className={ProblemPageStyle.buttons}>
          <ul>
            <li>a</li>
            <li>a</li>
            <li>a </li>
          </ul>
        </div>
        <Editor />
      </div>
  </div>
  );
}