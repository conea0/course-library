export type Problem = {
	statement: string;
	testcase: Testcase;
	code: string;
};

export type Testcase = {
	input: string[];
	output: string;
};

export type ProblemProps = {
	id: number;
	completed: boolean;
	invalid: boolean;
	submitted: boolean;
	partNumber: number;
	unitNumber: number;
	problemNumber: number;
};

export interface PartProps {
	id: number;
	partNumber: number;
	status: number; // 0〜100で進捗率を返す
}

export interface UnitProps {
	id: number;
	name: string;
	unitNumber: number;
	problemCount: number;
	status: number;
}
