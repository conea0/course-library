export type problem = {
	statement: string;
	testcase: Testcase;
	code: string;
};

export type Testcase = {
	input: string[];
	output: string;
};

export type problemProps = {
	part: number;
	unit: number;
	id: number;
};

export interface Part {
	id: string;
	name: string;
	status: number;
}

export interface Unit {
	id: string;
	name: string;
	status: number;
	partId: string;
}
