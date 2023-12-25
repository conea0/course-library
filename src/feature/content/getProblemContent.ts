import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import { problem } from '@/types/index'

const basePath = `${process.cwd()}/python-basic-course`

const getProblemContent = (partNumber: number, unitNumber: number, problemNumber: number): problem => {
	const unit = ( '000' + unitNumber ).slice( -3 );

	const problemPath = path.join(basePath, `part${partNumber}/${unit}/problems/out/${problemNumber}.yaml`)
	const problemContent = fs.readFileSync(problemPath, 'utf8')
	const problemYaml = yaml.load(problemContent)

	return problemYaml as problem
}

export default getProblemContent;
