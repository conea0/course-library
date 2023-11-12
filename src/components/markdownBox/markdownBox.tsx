import ReactMarkdown from 'react-markdown';
import markdownBoxStyle from './markdownBox.module.css'
import { getProblem } from '@/feature/problem/getProblem';
import 'github-markdown-css/github-markdown-light.css';

export const ProblemCard = () => {
  const markdown = getProblem(0,0,0).statement;
  return (
    <article className={markdownBoxStyle.cardbox}>
      <ReactMarkdown className="markdown-body">
          {markdown}
      </ReactMarkdown>
    </article>
  );
};
