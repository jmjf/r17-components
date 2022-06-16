import { ISpeaker } from 'SpeakerData';
import { SpeakerCard } from './SpeakerCard';

interface ISpeakersListProps {
	data: ISpeaker[];
}

export const SpeakersList = ({ data }: ISpeakersListProps) => {
	return (
		<div className="container speakers-list">
			<div className="row">
				{data.map((speaker) => {
					return <SpeakerCard key={speaker.speakerId} speaker={speaker} />;
				})}
			</div>
		</div>
	);
};
