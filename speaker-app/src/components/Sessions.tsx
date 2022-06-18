import { SpeakerControlsContext } from 'contexts/SpeakerControlsContext';
import { useContext } from 'react';
import { ISession } from 'SpeakerData';
import { Session } from './Session';

interface ISessionsProps {
	sessions: ISession[];
}

export const Sessions = ({ sessions }: ISessionsProps) => {
	const { eventYear } = useContext(SpeakerControlsContext);

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
