import { problemProps } from "@/types";
import ReactMarkdown from "react-markdown";
import problemBoxStyle from "./problemBox.module.css";
import { getProblem } from "@/feature/problem/getProblem";
import "github-markdown-css/github-markdown-light.css";

export const ProblemBox = ({
  problemProps,
}: {
  problemProps: problemProps;
}) => {
  const markdown = getProblem(
    problemProps.part,
    problemProps.unit,
    problemProps.id
  ).statement;
  return (
    <article className={problemBoxStyle.problemBox}>
      <ReactMarkdown className="markdown-body">{markdown}</ReactMarkdown>
    </article>
  );
};
