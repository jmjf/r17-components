import { AuthContext } from 'contexts/AuthContext';
import { useContext } from 'react';

export interface IHOCSpeaker {
	imageSrc: string;
	name: string;
}

export function withAuth(ComponentToWrap: any) {
	const WrappedComponent = (props: any): JSX.Element => {
		const { loggedInUserName, setLoggedInUserName } = useContext(AuthContext);

		return (
			<ComponentToWrap loggedInUserName={loggedInUserName} setLoggedInUserName={setLoggedInUserName} {...props} />
		);
	};
	return WrappedComponent;
}
