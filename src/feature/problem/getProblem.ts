import { problem } from "@/types";
import { readFileSync } from "fs";
import { load } from "js-yaml";
import { resolve } from "path"; 

const zeroPadding = (num: number, length: number): string => {
  return num.toString().padStart(length, '0');
}

export const getProblem = (part: number, unit: number, id: number): problem => {
  const outputProblem: problem = load(
    readFileSync(resolve(
      `src/feature/problem/${zeroPadding(part, 3)}_${zeroPadding(unit, 3)}_${zeroPadding(id, 3)}.yaml`
      ),"utf8")
    ) as problem;
    return(
        outputProblem
    );
}
