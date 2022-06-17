import { useState, useEffect, Component } from 'react';

import { ISpeaker, data } from 'SpeakerData';

export interface IUseRequestSpeakers {
	speakers: ISpeaker[];
	componentStatus: ComponentStatusType;
	loadErrorMessage: string;
	onFavoriteToggle: (speakerId: string) => void;
}

export type ComponentStatusType = 'LOADING' | 'LOADERROR' | 'READY';

export const useRequestSpeakers = (delayMs = 1000): IUseRequestSpeakers => {
	const [speakers, setSpeakers] = useState([] as ISpeaker[]);
	const [componentStatus, setComponentStatus] = useState('LOADING' as ComponentStatusType);
	const [loadErrorMessage, setLoadErrorMessage] = useState('');

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		const delayedAction = async () => {
			try {
				await delay(delayMs);
				// throw Error('test error');
				setComponentStatus('READY');
				setSpeakers(data);
			} catch (e) {
				const err = e as Error;
				setComponentStatus('LOADERROR');
				setLoadErrorMessage(err.toString());
			}
		};
		delayedAction();
	}, [delayMs]);

	const onFavoriteToggle = (speakerId: string) => {
		const oldSpeaker = speakers.find((speaker: ISpeaker) => speaker.speakerId === speakerId);
		const newSpeaker = { ...oldSpeaker, favoriteFlag: !oldSpeaker?.favoriteFlag };
		const newSpeakers = speakers.map((speaker: ISpeaker) => {
			return speaker.speakerId === speakerId ? newSpeaker : speaker;
		}) as ISpeaker[];
		setSpeakers(newSpeakers);
	};

	return { speakers, componentStatus, loadErrorMessage, onFavoriteToggle };
};
