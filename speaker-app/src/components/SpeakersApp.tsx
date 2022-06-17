import { Header } from './Header';
import { Speakers } from './Speakers';
import { Layout } from './Layout';

export const SpeakersApp = () => {
	return (
		<Layout startingTheme="light">
			<div>
				<Header />
				<Speakers />
			</div>
		</Layout>
	);
};
