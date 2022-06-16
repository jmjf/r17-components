import { data } from 'SpeakerData';

import { SpeakersList } from './SpeakersList';

export const Speakers = () => {
	return (
		<div className="container-fluid">
			<SpeakersList data={data} />
		</div>
	);
};
