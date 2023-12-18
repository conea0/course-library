import { PageChangeButton } from "@/components/pageChangeButton/pageChangeButton";
import { Buttons } from "@/components/problemPage/buttons/buttons";
import ProblemPageHeaderStyle from "./problemPageHeader.module.css";
import HintImage from "/public/images/hint-b.svg";
import RunImage from "/public/images/run-b.svg";
import SubmitImage from "/public/images/submit-b.svg";

export const ProblemPageHeader = () => {
  const elementsR = [
    {
      path: HintImage,
      text: "ヒント",
    },
    {
      path: RunImage,
      text: "実行",
    },
    {
      path: SubmitImage,
      text: "提出",
    },
  ];
  return (
    <div className={ProblemPageHeaderStyle.header}>
      <div>
        <PageChangeButton />
      </div>
      <div>
        <Buttons buttons={elementsR} />
      </div>
    </div>
  );
};
