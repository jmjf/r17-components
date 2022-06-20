import { useState, useEffect } from 'react';
import axios from 'axios';

const speakersApiUrl = 'api/speakers';

export interface IRequestData {
	id: string;
}

export type DMLFunctionType<DataItemType> = (dataItem: DataItemType, doneCallback?: () => void) => void;

export interface IUseRequestData<DataItemType> {
	data: DataItemType[];
	requestStatus: RequestStatusType;
	loadErrorMessage: string;
	updateData: DMLFunctionType<DataItemType>;
	insertData: DMLFunctionType<DataItemType>;
	deleteData: DMLFunctionType<DataItemType>;
}

export type RequestStatusType = 'LOADING' | 'LOADERROR' | 'READY';

export function useRequestRest<DataItemType extends IRequestData>(
	apiUrl = speakersApiUrl
): IUseRequestData<DataItemType> {
	const [data, setData] = useState<DataItemType[]>([] as DataItemType[]);
	const [requestStatus, setRequestStatus] = useState<RequestStatusType>('LOADING' as RequestStatusType);
	const [loadErrorMessage, setLoadErrorMessage] = useState('');

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		const delayedAction = async () => {
			try {
				const res = await axios.get(apiUrl);
				setData(res.data);
				setRequestStatus('READY');
			} catch (e) {
				const err = e as Error;
				setRequestStatus('LOADERROR');
				setLoadErrorMessage(err.toString());
			}
		};
		delayedAction();
	}, [apiUrl]);

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
				await axios.put(`${apiUrl}/${dataItem.id}`, dataItem);
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
				await axios.post(`${apiUrl}`, dataItem);
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
				await axios.delete(`${apiUrl}/${dataItem.id}`);
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
