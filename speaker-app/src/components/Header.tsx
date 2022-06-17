import { useContext } from 'react';
import { ThemeContext } from './Layout';

export const Header = () => {
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
						Hello Mr. Smith &nbsp;&nbsp;
						<span>
							<a href="#">sign-out</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
