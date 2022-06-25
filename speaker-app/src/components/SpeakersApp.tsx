import Header from './Header';
import { Speakers } from './Speakers';
import { Layout } from './Layout';
import { AuthContextProvider } from 'contexts/AuthContext';

export const SpeakersApp = () => {
	return (
		<AuthContextProvider loggedInUserName="Joe Jones">
			<Layout startingTheme="light">
				<div>
					<Header />
					<Speakers />
				</div>
			</Layout>
		</AuthContextProvider>
	);
};
