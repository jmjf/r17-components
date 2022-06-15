import { data } from '../SpeakerData';

import { Session } from 'components/Session';
import { Sessions } from 'components/Sessions';

const IndexPage = () => {
	return (
		<div className="container speakers-list">
			<div className="row">
				{data.map((speaker) => {
					const { speakerId, bioText, firstName, lastName, favoriteFlag, twitterHandle, companyName, sessions } =
						speaker;
					return (
						<div key={speakerId} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
							<div className="card card-height p-4 mt-4">
								<div className="speaker-img d-flex flex-row justify-content-center align-items-center h300">
									<img
										className="contain-fit"
										src={`/images/speaker-${speakerId}.jpg`}
										width="300"
										alt={`image of ${firstName} ${lastName}`}
									/>
								</div>
								<div className="speaker-info">
									<div className="d-flex justify-content-between mb-3">
										<h3 className="text-truncate w200">
											{firstName} {lastName}
										</h3>
									</div>
									<p>
										{bioText} {companyName} {twitterHandle} {favoriteFlag}
									</p>
								</div>
							</div>
							<Sessions sessions={sessions} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default IndexPage;
