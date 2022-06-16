import { useEffect, useState } from 'react';

import ContentLoader from 'react-content-loader';

import { data } from '../SpeakerData';

import { ISpeaker } from 'SpeakerData';
import { SpeakerCard } from './SpeakerCard';

interface ISpeakersListProps {
	showSessionsFlag: boolean;
}

const SpeakerLoader = () => {
	return (
		<ContentLoader viewBox="0 0 380 70">
			<circle cx="30" cy="30" r="30" />
			<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
			<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
		</ContentLoader>
	);
};

export const SpeakersList = ({ showSessionsFlag }: ISpeakersListProps) => {
	const [speakers, setSpeakers] = useState([] as ISpeaker[]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadError, setIsLoadError] = useState(false);
	const [loadErrorMessage, setLoadErrorMessage] = useState('');

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	useEffect(() => {
		const delayedAction = async () => {
			try {
				await delay(2000);
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
	}, []);

	const onFavoriteToggle = (speakerId: string) => {
		const oldSpeaker = speakers.find((speaker: ISpeaker) => speaker.speakerId === speakerId);
		const newSpeaker = { ...oldSpeaker, favoriteFlag: !oldSpeaker?.favoriteFlag };
		const newSpeakers = speakers.map((speaker: ISpeaker) => {
			return speaker.speakerId === speakerId ? newSpeaker : speaker;
		}) as ISpeaker[];
		setSpeakers(newSpeakers);
	};

	// if (isLoading === true) return <div>Loading...</div>;

	if (isLoadError === true) {
		return (
			<div className="text-danger">
				<p>
					ERROR: <b>Loading Speaker data failed.</b>
				</p>
				<p>{loadErrorMessage}</p>
			</div>
		);
	}

	return (
		<div className="container speakers-list">
			{isLoading ? (
				<SpeakerLoader />
			) : (
				<div className="row">
					{speakers.map((speaker) => {
						return (
							<SpeakerCard
								key={speaker.speakerId}
								speaker={speaker}
								onFavoriteToggle={() => onFavoriteToggle(speaker.speakerId)}
								showSessionsFlag={showSessionsFlag}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
