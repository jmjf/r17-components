import { useState, useEffect } from 'react';

import { ISpeaker, data } from 'SpeakerData';

export interface IUseRequestSpeakers {
	speakers: ISpeaker[];
	isLoading: boolean;
	isLoadError: boolean;
	loadErrorMessage: string;
	onFavoriteToggle: (speakerId: string) => void;
}

export const useRequestSpeakers = (delayMs = 1000): IUseRequestSpeakers => {
	const [speakers, setSpeakers] = useState([] as ISpeaker[]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadError, setIsLoadError] = useState(false);
	const [loadErrorMessage, setLoadErrorMessage] = useState('');

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		const delayedAction = async () => {
			try {
				await delay(delayMs);
				// throw Error('test error');
				setIsLoading(false);
				setSpeakers(data);
			} catch (e) {
				const err = e as Error;
				setIsLoading(false);
				setIsLoadError(true);
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

	return { speakers, isLoading, isLoadError, loadErrorMessage, onFavoriteToggle };
};
