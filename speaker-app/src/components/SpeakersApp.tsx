import { useState } from 'react';

import { data } from 'SpeakerData';

import { Header } from 'components/Header';
import { Speakers } from './Speakers';

export const SpeakersApp = () => {
	const [themeName, setThemeName] = useState('light');

	return (
		<div className={`container-fluid ${themeName}`}>
			<Header themeName={themeName} />
			<Speakers data={data} themeName={themeName} setThemeName={setThemeName} />
		</div>
	);
};
