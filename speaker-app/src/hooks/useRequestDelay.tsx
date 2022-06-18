import { useState, useEffect } from 'react';

export interface IRequestData {
	id: string;
}

export type DMLFunctionType<DataItemType> = (dataItem: DataItemType, doneCallback: () => void) => void;

export interface IUseRequestData<DataItemType> {
	data: DataItemType[];
	requestStatus: RequestStatusType;
	loadErrorMessage: string;
	updateData: DMLFunctionType<DataItemType>;
	insertData: DMLFunctionType<DataItemType>;
	deleteData: DMLFunctionType<DataItemType>;
}

export type RequestStatusType = 'LOADING' | 'LOADERROR' | 'READY';

export function useRequestDelay<DataItemType extends IRequestData>(
	getData: () => DataItemType[],
	delayMs = 1000
): IUseRequestData<DataItemType> {
	const [data, setData] = useState([] as DataItemType[]);
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
	const updateData = (
		dataItem: DataItemType,
		doneCallback = () => {
			return;
		}
	): void => {
		const oldData = [...data];

		const newData = data.map((rec) => {
			return rec.id === dataItem.id ? dataItem : rec;
		});

		const delayedAction = async () => {
			try {
				setData(newData);
				await delay(delayMs);
				doneCallback();
			} catch (e) {
				const err = e as Error;
				console.log('saveData() error', err.toString());
				doneCallback();
				setData(oldData);
			}
		};
		delayedAction();
	};

	// default callback does nothing, making it optional
	const insertData = (
		dataItem: DataItemType,
		doneCallback = () => {
			return;
		}
	): void => {
		const oldData = [...data];
		const newData = [dataItem, ...data];

		const delayedAction = async () => {
			try {
				setData(newData);
				await delay(delayMs);
				doneCallback();
			} catch (e) {
				const err = e as Error;
				console.log('saveData() error', err.toString());
				doneCallback();
				setData(oldData);
			}
		};
		delayedAction();
	};

	// default callback does nothing, making it optional
	const deleteData = (
		dataItem: DataItemType,
		doneCallback = () => {
			return;
		}
	): void => {
		const oldData = [...data];
		const newData = data.filter((item) => item.id !== dataItem.id);

		const delayedAction = async () => {
			try {
				setData(newData);
				await delay(delayMs);
				doneCallback();
			} catch (e) {
				const err = e as Error;
				console.log('saveData() error', err.toString());
				doneCallback();
				setData(oldData);
			}
		};
		delayedAction();
	};

	return { data, requestStatus, loadErrorMessage, updateData, insertData, deleteData };
}
