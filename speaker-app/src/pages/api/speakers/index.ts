import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(fs.readFile);

import { NextApiRequest, NextApiResponse } from 'next';

const delay = (ms: number) =>
	new Promise((resolve) => {
		setTimeout(resolve, ms);
	});

const logMessage = (type: string, message: string) => {
	console.log(`${new Date().toISOString()} | ${type} | ${message}`);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const dbFile = path.resolve('./src/', 'db.json');

	try {
		const fileData = await readFile(dbFile);
		await delay(1000);
		const speakers = JSON.parse(fileData.toString()).speakers;

		if (speakers) {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(speakers));
			logMessage('RESPONSE', `GET /api/speakers | status: 200 | speakers: ${speakers.length}`);
		}
	} catch (e) {
		console.log('Error reading db.json', e);
		logMessage('ERROR', `GET /api/speakers | status: 404 | ${e}`);
		res.status(404).send('File not found or incorrect format');
	}
}
