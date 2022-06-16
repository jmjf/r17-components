import { useState } from 'react';

export const SpeakersToolbar = () => {
	const [themeName, setThemeName] = useState('light');
	const [showSessionsFlag, setShowSessionsFlag] = useState(true);

	return (
		<section className="toolbar dark-theme-header">
			<div className="container">
				<div className="justify-content-between">
					<ul className="toolrow d-flex flex-column flex-lg-row">
						<li className="d-flex flex-column flex-md-row">
							<b>Show Sessions&nbsp;&nbsp;</b>
							<label className="fav">
								<input
									type="checkbox"
									checked={showSessionsFlag}
									onChange={(ev) => setShowSessionsFlag(ev.target.checked)}
								/>
								<span className="switch"></span>
							</label>
						</li>
						<li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
							<strong>Theme</strong>
							<label className="dropdown">
								<select
									className="form-control theme"
									value={themeName}
									onChange={(ev) => setThemeName(ev.target.value)}
								>
									<option value="light">Light</option>
									<option value="dark">Dark</option>
								</select>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
