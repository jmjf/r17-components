import { Header } from 'components/Header';
import { SpeakersToolbar } from 'components/SpeakersToolbar';
import { Speakers } from 'components/Speakers';

const IndexPage = () => {
	return (
		<div>
			<Header />
			<SpeakersToolbar />
			<Speakers />
		</div>
	);
};

export default IndexPage;
