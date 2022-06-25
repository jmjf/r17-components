import { PropsWithChildren } from 'react';

import { IHOCSpeaker, withData } from '../components/withData';

interface ISpeakersProps extends PropsWithChildren {
	speakers: IHOCSpeaker[];
}

const SpeakersHoc = ({ speakers, ...props }: ISpeakersProps) => {
	return (
		<div>
			{speakers.map(({ imageSrc, name }: IHOCSpeaker) => {
				return <img src={`images/${imageSrc}.jpg`} alt={name} key={imageSrc}></img>;
			})}
		</div>
	);
};

export default withData(2)(SpeakersHoc);
