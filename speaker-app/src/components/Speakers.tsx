import { SpeakerControlsContextProvider } from 'contexts/SpeakerControlsContext';

import { SpeakersList } from './SpeakersList';
import { SpeakersToolbar } from './SpeakersToolbar';

export const Speakers = () => {
	return (
		<SpeakerControlsContextProvider startingShowSessionsFlag={false}>
			<SpeakersToolbar />
			<SpeakersList />
		</SpeakerControlsContextProvider>
	);
};
