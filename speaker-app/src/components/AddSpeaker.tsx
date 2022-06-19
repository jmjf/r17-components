import { DMLFunctionType } from 'hooks/useRequestDelay';
import { ISpeaker } from 'SpeakerData';

interface IAddSpeakerProps {
	eventYear: string;
	insertSpeaker: DMLFunctionType<ISpeaker>;
}

export const AddSpeaker = ({ eventYear, insertSpeaker }: IAddSpeakerProps) => {
	return (
		<a href="#" className="addSes">
			<i
				onClick={(e) => {
					e.preventDefault();
					promptAndAddSpeaker(eventYear, insertSpeaker);
				}}
			>
				+
			</i>
		</a>
	);
};

const promptAndAddSpeaker = (eventYear: string, insertSpeaker: DMLFunctionType<ISpeaker>) => {
	const firstLastName = window.prompt('Enter first and last name:', '') as string;
	const firstLastNameArr = firstLastName.split(' ');
	insertSpeaker(
		{
			id: '99999',
			firstName: firstLastNameArr[0],
			lastName: firstLastNameArr[1],
			bioText: 'Bio not entered yet',
			sessions: [
				{
					sessionId: '88888',
					sessionName: `New session for ${firstLastNameArr[0]}`,
					room: { roomName: 'No room assigned' },
					eventYear: eventYear,
				},
			],
		},
		() => {
			console.log('insert done callback');
		}
	);
};
