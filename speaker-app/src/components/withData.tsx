export interface IHOCSpeaker {
	imageSrc: string;
	name: string;
}

export function withData(maxToShow: number) {
	return function (ComponentToWrap: any) {
		const speakers: IHOCSpeaker[] = [
			{ imageSrc: 'speaker-1124', name: 'Douglas Crockford' },
			{ imageSrc: 'speaker-1530', name: 'Tamara Baker' },
			{ imageSrc: 'speaker-10803', name: 'Eugene Chuvyrov' },
		];

		const WrappedComponent = (props: any) => {
			const slicedSpeakers = speakers.slice(0, maxToShow);
			return <ComponentToWrap {...props} speakers={slicedSpeakers} />;
		};
		return WrappedComponent;
	};
}
