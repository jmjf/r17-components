import { ISpeaker } from 'SpeakerData';
import { SpeakerCard } from './SpeakerCard';

interface ISpeakersListProps {
	data: ISpeaker[];
	showSessionsFlag: boolean;
}

export const SpeakersList = ({ data, showSessionsFlag }: ISpeakersListProps) => {
	return (
		<div className="container speakers-list">
			<div className="row">
				{data.map((speaker) => {
					return <SpeakerCard key={speaker.speakerId} speaker={speaker} showSessionsFlag={showSessionsFlag} />;
				})}
			</div>
		</div>
	);
};
