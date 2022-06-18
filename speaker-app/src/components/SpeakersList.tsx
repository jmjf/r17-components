import ContentLoader from 'react-content-loader';

import { SpeakerCard } from './SpeakerCard';
import { useRequestDelay } from '../hooks/useRequestDelay';

import { ISpeaker, getSpeakerData } from '../SpeakerData';

const SpeakerLoader = () => {
	return (
		<ContentLoader viewBox="0 0 380 70">
			<circle cx="30" cy="30" r="30" />
			<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
			<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
		</ContentLoader>
	);
};

export const SpeakersList = () => {
	// data: speakers -> renames data to speakers
	const {
		data: speakers,
		requestStatus,
		loadErrorMessage,
		saveData,
	} = useRequestDelay<ISpeaker>(getSpeakerData, 2000);

	switch (requestStatus) {
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
					<span className="fas fa-5x fa-sync fa-spin"></span>
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
									key={speaker.id}
									speaker={speaker}
									onFavoriteToggle={(doneCallback: () => void) => {
										saveData({ ...speaker, favoriteFlag: !speaker.favoriteFlag } as ISpeaker, doneCallback);
									}}
								/>
							);
						})}
					</div>
				</div>
			);
			break;
		default:
			return <div>ERROR: Unknown component status {requestStatus}</div>;
			break;
	}
};
