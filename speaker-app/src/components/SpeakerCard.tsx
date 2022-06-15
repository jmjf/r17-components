import { ISpeaker } from '../SpeakerData';

import { SpeakerImage } from 'components/SpeakerImage';
import { Sessions } from 'components/Sessions';
import { SpeakerInfo } from 'components/SpeakerInfo';

interface ISpeakerCardProps {
	speaker: ISpeaker;
}

export const SpeakerCard = ({ speaker }: ISpeakerCardProps) => {
	const { speakerId, firstName, lastName, sessions } = speaker;
	return (
		<div key={speakerId} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
			<div className="card card-height p-4 mt-4">
				<SpeakerImage speakerId={speakerId} firstName={firstName} lastName={lastName} />
				<SpeakerInfo {...speaker} />
			</div>
			<Sessions sessions={sessions} />
		</div>
	);
};
