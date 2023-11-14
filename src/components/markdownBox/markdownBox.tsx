import ReactMarkdown from 'react-markdown';
import markdownBoxStyle from './markdownBox.module.css'
import { getProblem } from '@/feature/problem/getProblem';
import 'github-markdown-css/github-markdown-light.css';

export const ProblemCard = ({part, unit, id}: {part: number, unit: number, id: number}) => {
  const markdown = getProblem(part, unit, id).statement;
  return (
    <article className={markdownBoxStyle.cardbox}>
      <ReactMarkdown className="markdown-body">
          {markdown}
      </ReactMarkdown>
    </article>
  );
};
