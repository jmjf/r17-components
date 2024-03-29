import { useContext } from 'react';

import ContentLoader from 'react-content-loader';

import { SpeakerCard } from './SpeakerCard';
import AddSpeaker from './AddSpeaker';
import { useRequestDelay } from '../hooks/useRequestDelay';
import { SpeakerControlsContext } from 'contexts/SpeakerControlsContext';

import { ISpeaker } from '../SpeakerData';
import { useRequestRest } from 'hooks/useRequestRest';

const SpeakerLoader = () => {
	return (
		<ContentLoader viewBox="0 0 380 70">
			<circle cx="30" cy="30" r="30" />
			<rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
			<rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
		</ContentLoader>
	);
};

const speakerApiUrl = 'api/speakers';

export const SpeakersList = () => {
	// data: speakers -> renames data to speakers
	const {
		data: speakers,
		requestStatus,
		loadErrorMessage,
		updateData,
		insertData,
		deleteData,
	} = useRequestRest<ISpeaker>(speakerApiUrl);
	const { eventYear, searchText } = useContext(SpeakerControlsContext);

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
					<AddSpeaker eventYear={eventYear} insertSpeaker={insertData} />
					<div className="row">
						{speakers
							.filter(
								(speaker) =>
									// last or first name includes the searchText (case insensitive) && has sessions in the selected eventYear
									(speaker.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
										speaker.firstName.toLowerCase().includes(searchText.toLowerCase())) &&
									speaker.sessions.some((session) => session.eventYear === eventYear)
							)
							.map((speaker) => {
								return (
									<SpeakerCard
										key={speaker.id}
										speaker={speaker}
										updateSpeaker={updateData}
										insertSpeaker={insertData}
										deleteSpeaker={deleteData}
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
