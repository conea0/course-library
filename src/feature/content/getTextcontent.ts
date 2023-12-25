import fs from 'fs';
import path from 'path';

const basePath = `${process.cwd()}/python-basic-course`

const getTextContent = (partNumber: number, unitNumber: number): string => {
	const unit = ('000' + unitNumber).slice(-3);

	const textPath = path.join(basePath, `part${partNumber}/${unit}/${unit}.md`)
	const text = fs.readFileSync(textPath, 'utf8')

	return text
}

export default getTextContent;
