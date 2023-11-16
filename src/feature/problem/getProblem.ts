import { problem } from "@/types";
import { readFileSync } from "fs";
import { load } from "js-yaml";
import { resolve } from "path"; 

const example: problem = load(
  readFileSync(resolve("src/feature/problem/problem.yaml"), "utf8")
) as problem;
const data = [
  [
    [
      {
        statement: example.statement,
        testcase: example.testcase,
        code: example.code,
      },
    ],
  ],
];
export const getProblem = (part: number, unit: number, id: number): problem => {
    return(
        data[part][unit][id]
    );
}
