import { ReactElement } from 'react';

type SpeakerType = { imageSrc: string; name: string };

interface IChildProps {
	speakers: SpeakerType[];
}

// default React types don't play well with children as a function
interface ISpeakersRenderPropsProps {
	children: (props: IChildProps) => ReactElement;
}

export default function SpeakersRenderProps(props: ISpeakersRenderPropsProps) {
	const speakers: SpeakerType[] = [
		{ imageSrc: 'speaker-1124', name: 'Douglas Crockford' },
		{ imageSrc: 'speaker-1530', name: 'Tamara Baker' },
		{ imageSrc: 'speaker-10803', name: 'Eugene Chuvyrov' },
	];
	return props.children({ speakers: speakers });
}
