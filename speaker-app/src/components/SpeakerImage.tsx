interface ISpeakerImageProps {
	speakerId: string;
	firstName: string;
	lastName: string;
}

export const SpeakerImage = ({ speakerId, firstName, lastName }: ISpeakerImageProps) => {
	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h300">
			<img
				className="contain-fit"
				src={`/images/speaker-${speakerId}.jpg`}
				width="300"
				alt={`image of ${firstName} ${lastName}`}
			/>
		</div>
	);
};
