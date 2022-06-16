import { useState } from 'react';

import { SpeakersList } from './SpeakersList';
import { SpeakersToolbar } from './SpeakersToolbar';

import { ISpeaker } from 'SpeakerData';

interface ISpeakerProps {
	themeName: string;
	setThemeName: (value: string) => void;
}

export const Speakers = ({ themeName, setThemeName }: ISpeakerProps) => {
	const [showSessionsFlag, setShowSessionsFlag] = useState(true);

	return (
		<>
			<SpeakersToolbar
				themeName={themeName}
				setThemeName={setThemeName}
				showSessionsFlag={showSessionsFlag}
				setShowSessionsFlag={setShowSessionsFlag}
			/>
			<SpeakersList showSessionsFlag={showSessionsFlag} />
		</>
	);
};
