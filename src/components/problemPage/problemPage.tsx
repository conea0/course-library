import { Editor } from "@/components/editor/editor";
import { Heading } from "@/components/heading/heading";
import { ProblemBox } from "@/components/problemBox/problemBox";
import ProblemPageStyle from "./probemPage.module.css";
import { RightButtons } from "./rightButtons/rightButtons";
import HintImage from '/public/images/hint-b.svg';
import RunImage from '/public/images/run-b.svg';
import SubmitImage from '/public/images/submit-b.svg';

export const ProblemPage =() =>{
  const hoge = {
    part:0,
    unit:0,
    id:0
  }

  const hogehoge = [
    {
        path:HintImage,
        text:"ヒント",
    },
    {
        path:RunImage,
        text:"実行",
    },
    {
        path:SubmitImage,
        text:"提出",
    },
  ]
  return (
    <div className={ProblemPageStyle.content}>
      <div className={ProblemPageStyle.left}>
        <Heading subtitle="Part1 / Pythonの基本文法について学ぼう">Print文について学ぼう</Heading>
        <h2>問題</h2>
        <ProblemBox problemProps={hoge} />
      </div>
      <div className={ProblemPageStyle.right}>
        <RightButtons buttons={hogehoge}/>
        <h3>コード</h3>
        <Editor />
      </div>
  </div>
  );
}