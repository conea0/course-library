export type problem = {
	text:string,
	testcase:Testcase,
	code:string,
}

export type Testcase = {
    input: string[],
	output: string[],
}
