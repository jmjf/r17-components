import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import { IAuthContextProps } from 'contexts/AuthContext';
import { withAuth } from './withAuth';

const LoggedIn = ({ loggedInUserName, setLoggedInUserName }: IAuthContextProps) => {
	return (
		<div>
			<span>Hello, {loggedInUserName} &nbsp;&nbsp;</span>
			<button className="btn btn-secondary" onClick={() => setLoggedInUserName('')}>
				Logout
			</button>
		</div>
	);
};

const NotLoggedIn = ({ loggedInUserName, setLoggedInUserName }: IAuthContextProps) => {
	return (
		<div>
			<button
				className="btn-secondary"
				onClick={(e) => {
					e.preventDefault();
					const userName = window.prompt('Enter user name:', '');
					setLoggedInUserName(userName || '');
				}}
			>
				Login
			</button>
		</div>
	);
};

function Header({ loggedInUserName, setLoggedInUserName }: IAuthContextProps) {
	const { themeName } = useContext(ThemeContext);

	return (
		<div className="padT4 padB4">
			<div className="container mobile-container">
				<div className="d-flex justify-content-between">
					<div>
						<img alt="SVCC home page" src="/images/SVCClogo.png" />
					</div>
					<div className={themeName}>
						<h4 className="header-title">Silicon Valley Code Camp</h4>
					</div>
					<div className={themeName === 'light' ? '' : 'text-info'}>
						{loggedInUserName && loggedInUserName.length > 0 ? (
							<LoggedIn loggedInUserName={loggedInUserName} setLoggedInUserName={setLoggedInUserName} />
						) : (
							<NotLoggedIn loggedInUserName={loggedInUserName} setLoggedInUserName={setLoggedInUserName} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withAuth(Header);
