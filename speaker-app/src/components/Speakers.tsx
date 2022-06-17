import { useState } from 'react';

import { SpeakersList } from './SpeakersList';
import { SpeakersToolbar } from './SpeakersToolbar';

export const Speakers = () => {
	const [showSessionsFlag, setShowSessionsFlag] = useState(true);

	return (
		<>
			<SpeakersToolbar showSessionsFlag={showSessionsFlag} setShowSessionsFlag={setShowSessionsFlag} />
			<SpeakersList showSessionsFlag={showSessionsFlag} />
		</>
	);
};
