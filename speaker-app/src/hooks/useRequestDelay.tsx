import { useState, useEffect } from 'react';

export interface IRequestData {
	id: string;
}

export interface IUseRequestData<T> {
	data: T[];
	requestStatus: RequestStatusType;
	loadErrorMessage: string;
	saveData: (newRecord: T, doneCallback: () => void) => void;
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
	}, [delayMs, getData]);

	// default callback does nothing, making it optional
	const saveData = (
		newRecord: T,
		doneCallback = () => {
			return;
		}
	): void => {
		const newData = data.map((rec) => {
			return rec.id === newRecord.id ? newRecord : rec;
		});

		const delayedAction = async () => {
			try {
				await delay(delayMs);
				doneCallback();
				setData(newData);
			} catch (e) {
				const err = e as Error;
				console.log('saveData() error', err.toString());
				doneCallback();
			}
		};
		delayedAction();
	};

	return { data, requestStatus, loadErrorMessage, saveData };
}
