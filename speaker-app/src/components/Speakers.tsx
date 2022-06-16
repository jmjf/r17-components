import { useState } from 'react';

import { data } from 'SpeakerData';

import { Header } from 'components/Header';
import { SpeakersToolbar } from 'components/SpeakersToolbar';
import { SpeakersList } from './SpeakersList';

export const Speakers = () => {
	const [themeName, setThemeName] = useState('light');
	const [showSessionsFlag, setShowSessionsFlag] = useState(true);

	return (
		<div className={`container-fluid ${themeName}`}>
			<Header themeName={themeName} />
			<SpeakersToolbar
				themeName={themeName}
				setThemeName={setThemeName}
				showSessionsFlag={showSessionsFlag}
				setShowSessionsFlag={setShowSessionsFlag}
			/>
			<SpeakersList data={data} />
		</div>
	);
};
