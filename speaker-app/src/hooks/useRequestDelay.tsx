import { useState, useEffect } from 'react';

export interface IRequestData {
	id: string;
}

export interface IUseRequestData<T> {
	data: T[];
	requestStatus: RequestStatusType;
	loadErrorMessage: string;
	saveData: (newRecord: T) => void;
}

export type RequestStatusType = 'LOADING' | 'LOADERROR' | 'READY';

export function useRequestDelay<T extends IRequestData>(getData: () => T[], delayMs = 1000): IUseRequestData<T> {
	const [data, setData] = useState([] as T[]);
	const [requestStatus, setRequestStatus] = useState('LOADING' as RequestStatusType);
	const [loadErrorMessage, setLoadErrorMessage] = useState('');

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		const delayedAction = async () => {
			try {
				await delay(delayMs);
				// throw Error('test error');
				setRequestStatus('READY');
				setData(getData());
			} catch (e) {
				const err = e as Error;
				setRequestStatus('LOADERROR');
				setLoadErrorMessage(err.toString());
			}
		};
		delayedAction();
	});

	const saveData = (newRecord: T): void => {
		const newData = data.map((rec) => {
			return rec.id === newRecord.id ? newRecord : rec;
		});

		const delayedAction = async () => {
			try {
				setRequestStatus('LOADING');
				await delay(delayMs);
				setData(newData);
				setRequestStatus('READY');
			} catch (e) {
				const err = e as Error;
				console.log('saveData() error', err.toString());
			}
		};
		delayedAction();
	};

	return { data, requestStatus, loadErrorMessage, saveData };
}
