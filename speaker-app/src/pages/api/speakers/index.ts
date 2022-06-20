import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

import { NextApiRequest, NextApiResponse } from 'next';
import { ISpeaker } from 'SpeakerData';

const delay = (ms: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

const logMessage = (type: string, message: string) => {
	console.log(`${new Date().toISOString()} | ${type} | ${message}`);
};

type MethodResultType = { statusCode: number; responseBody: string; fileData: ISpeaker[] };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const dbFile = path.resolve('./src/', 'db.json');

	const method = req.method;

	try {
		const fileData = await readFile(dbFile);
		await delay(1000);
		const speakers = JSON.parse(fileData.toString()).speakers;

		if (!speakers) {
			logMessage('ERROR', `${method} /api/speakers`);
			res.status(404).send('Data not found');
			return;
		} else {
			let methodResult: MethodResultType;
			switch (method) {
				case 'GET':
					methodResult = await getMethod(speakers);
					break;
				case 'POST':
					methodResult = await postMethod(speakers);
					break;
				default:
					logMessage('ERROR', `${method} /api/speakers | unknown method ${method}`);
					res.status(501).send(`${method} not implemented for no-id path`);
					return;
					break;
			}
			res.setHeader('Content-Type', 'application/json');
			res.status(methodResult.statusCode).send(methodResult.responseBody);
			logMessage(
				'RESPONSE',
				`${method} /api/speakers | status: ${methodResult.statusCode} | speakers: ${speakers.length} -> ${methodResult.fileData.length}`
			);
		}
	} catch (e) {
		console.log('Error reading db.json', e);
		logMessage('ERROR', `${method} /api/speakers | status: 404 | ${e}`);
		res.status(404).send('File not found or incorrect format');
	}

	async function getMethod(speakers: ISpeaker[]): Promise<MethodResultType> {
		return { statusCode: 200, responseBody: JSON.stringify(speakers), fileData: speakers };
	}

	async function postMethod(speakers: ISpeaker[]): Promise<MethodResultType> {
		const newId = (
			speakers.reduce((acc, cur) => {
				const curId = parseInt(cur.id);
				return curId > acc ? curId : acc;
			}, 0) + 1
		).toString();
		const newSpeaker = { ...req.body, id: newId.toString() };
		const newSpeakers = [newSpeaker, ...speakers];

		await writeFile(dbFile, JSON.stringify({ speakers: newSpeakers }, null, 3));

		return { statusCode: 201, responseBody: JSON.stringify(newSpeaker), fileData: newSpeakers };
	}
}
