import { useContext } from 'react';

import { SpeakerContext } from 'contexts/SpeakerContext';

export const DeleteSpeaker = () => {
	const { speaker, deleteSpeaker } = useContext(SpeakerContext);
	return (
		<span className="session w-100">
			<a href="#" className="remSes">
				<i
					onClick={(e) => {
						e.preventDefault();
						if (window.confirm(`Are you sure you want to delete ${speaker.firstName} ${speaker.lastName}?`)) {
							deleteSpeaker(speaker, () => {
								console.log('delete done callback');
							});
						}
					}}
				>
					-
				</i>
			</a>
			<span className="padL2">Delete Speaker</span>
		</span>
	);
};
