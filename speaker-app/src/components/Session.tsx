interface ISessionProps {
	sessionName: string;
	roomName: string;
}

export const Session = ({ sessionName, roomName }: ISessionProps) => {
	return (
		<span className="session w-100">
			{sessionName} <strong>Room: {roomName}</strong>
		</span>
	);
};
