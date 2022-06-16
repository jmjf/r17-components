import { useState } from 'react';

import { data } from '../SpeakerData';

import { ISpeaker } from 'SpeakerData';
import { SpeakerCard } from './SpeakerCard';

interface ISpeakersListProps {
	showSessionsFlag: boolean;
}

export const SpeakersList = ({ showSessionsFlag }: ISpeakersListProps) => {
	const [speakers, setSpeakers] = useState(data);

	const onFavoriteToggle = (speakerId: string) => {
		const oldSpeaker = speakers.find((speaker: ISpeaker) => speaker.speakerId === speakerId);
		const newSpeaker = { ...oldSpeaker, favoriteFlag: !oldSpeaker?.favoriteFlag };
		const newSpeakers = speakers.map((speaker: ISpeaker) => {
			return speaker.speakerId === speakerId ? newSpeaker : speaker;
		}) as ISpeaker[];
		setSpeakers(newSpeakers);
	};

	return (
		<div className="container speakers-list">
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
		</div>
	);
};
