export type Problem = {
	statement: string;
	testcase: Testcase[];
	code: string;
};

export type Testcase = {
	input: string[];
	output: string;
};

export type problemProps = {
	id: number;
	completed: boolean;
	invalid: boolean;
	submitted: boolean;
	part: number;
	unit: number;
	problemNumber: number;
};

export interface PartProps {
	id: number;
	partNumber: number;
	status: number;
}

export interface UnitProps {
	id: number;
	name: string;
	unitNumber: number;
	problemCount: number;
	status: number;
}
