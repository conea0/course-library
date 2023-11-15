import ReactMarkdown from 'react-markdown';
import problemBoxStyle from './problemBox.module.css'
import { getProblem } from '@/feature/problem/getProblem';
import 'github-markdown-css/github-markdown-light.css';

export const ProblemBox = ({part, unit, id}: {part: number, unit: number, id: number}) => {
  const markdown = getProblem(part,unit,id).statement;
  return (
    <article className={problemBoxStyle.problemBox}>
      <ReactMarkdown className="markdown-body">
          {markdown}
      </ReactMarkdown>
    </article>
  );
};
