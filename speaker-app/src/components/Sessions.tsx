import { ISession } from 'SpeakerData';
import { Session } from './Session';

interface ISessionsProps {
	sessions: ISession[];
}

export const Sessions = ({ sessions }: ISessionsProps) => {
	return (
		<div className="sesionBox card h-250">
			<Session sessionName={sessions[0].sessionName} roomName={sessions[0].room.roomName} />
		</div>
	);
};
