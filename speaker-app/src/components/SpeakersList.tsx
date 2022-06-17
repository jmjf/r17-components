import { useEffect, useState } from 'react';

import ContentLoader from 'react-content-loader';

import { SpeakerCard } from './SpeakerCard';
import { useRequestSpeakers } from 'hooks/useRequestSpeakers';

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
	const { speakers, componentStatus, loadErrorMessage, onFavoriteToggle } = useRequestSpeakers(2000);

	switch (componentStatus) {
		case 'LOADERROR':
			return (
				<div className="text-danger">
					<p>
						ERROR: <b>Loading Speaker data failed.</b>
					</p>
					<p>{loadErrorMessage}</p>
				</div>
			);
			break;
		case 'LOADING':
			return (
				<div className="container speakers-list">
					<SpeakerLoader />
				</div>
			);
			break;
		case 'READY':
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
			break;
		default:
			return <div>ERROR: Unknown component status {componentStatus}</div>;
	}
};
