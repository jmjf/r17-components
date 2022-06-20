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
	const id = req.query.id;
	const body = req.body;

	try {
		const fileData = await readFile(dbFile);

		await delay(1000);

		const speakers = JSON.parse(fileData.toString()).speakers as ISpeaker[];

		if (!speakers) {
			logMessage('ERROR', `${method} /api/speakers/${id}`);
			res.status(404).send('Data not found');
			return;
		} else {
			let methodResult: MethodResultType;
			switch (method) {
				case 'PUT':
					methodResult = await putMethod(speakers);
					break;
				case 'POST':
					methodResult = await postMethod(speakers);
					break;
				case 'DELETE':
					methodResult = await deleteMethod(speakers);
					break;
				default:
					logMessage('ERROR', `${method} /api/speakers/${id} | unknown method ${method}`);
					res.status(501).send(`${method} not implemented`);
					return;
					break;
			}
			await writeFile(dbFile, JSON.stringify({ speakers: methodResult.fileData }, null, 3));

			res.setHeader('Content-Type', 'application/json');
			res.status(methodResult.statusCode).send(methodResult.responseBody);
			logMessage(
				'RESPONSE',
				`${method} /api/speakers/${id} | status: ${methodResult.statusCode} | speakers: ${speakers.length} -> ${methodResult.fileData.length}`
			);
		}
	} catch (e) {
		console.log('Error updating db.json', e);
		logMessage('ERROR', `${method} /api/speakers/${id} | status: 404 | ${e}`);
		res.status(404).send('Error updating data');
	}

	async function putMethod(speakers: ISpeaker[]): Promise<MethodResultType> {
		const newSpeakers = speakers.map((speaker) => (speaker.id === id ? body : speaker));
		return { statusCode: 200, responseBody: JSON.stringify(body), fileData: newSpeakers };
	}

	async function postMethod(speakers: ISpeaker[]): Promise<MethodResultType> {
		const newId = (
			speakers.reduce((acc, cur) => {
				const curId = parseInt(cur.id);
				return curId > acc ? curId : acc;
			}, 0) + 1
		).toString();
		const newSpeaker = { ...body, id: newId.toString() };
		const newSpeakers = [newSpeaker, ...speakers];

		return { statusCode: 201, responseBody: JSON.stringify(newSpeaker), fileData: newSpeakers };
	}

	async function deleteMethod(speakers: ISpeaker[]): Promise<MethodResultType> {
		const newSpeakers = speakers.filter((speaker) => speaker.id !== id);
		return {
			statusCode: 200,
			responseBody: JSON.stringify(speakers.find((speaker) => speaker.id === id)),
			fileData: newSpeakers,
		};
	}
}
