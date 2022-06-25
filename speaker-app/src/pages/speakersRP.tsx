import SpeakersRenderProps from 'components/SpeakersRenderProps';

const SpeakersRP = () => {
	return (
		<SpeakersRenderProps>
			{({ speakers }) => {
				return (
					<div>
						{speakers.map(({ imageSrc, name }) => {
							return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}></img>;
						})}
					</div>
				);
			}}
		</SpeakersRenderProps>
	);
};

export default SpeakersRP;
