import { useContext } from 'react';

import { SpeakerContext } from 'contexts/SpeakerContext';
import { SpeakerControlsContext } from 'contexts/SpeakerControlsContext';
import { Session } from './Session';

export const Sessions = () => {
	const { eventYear } = useContext(SpeakerControlsContext);
	const {
		speaker: { sessions },
	} = useContext(SpeakerContext);

	return (
		<div className="sessionBox card h-250">
			{sessions
				.filter((session) => session.eventYear === eventYear)
				.map((session) => {
					return (
						<Session key={session.sessionId} sessionName={session.sessionName} roomName={session.room.roomName} />
					);
				})}
		</div>
	);
};
