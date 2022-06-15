import { data } from '../SpeakerData';

import { SpeakerCard } from 'components/SpeakerCard';

const IndexPage = () => {
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

export default IndexPage;
