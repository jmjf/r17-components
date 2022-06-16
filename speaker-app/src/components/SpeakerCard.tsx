import { ISpeaker } from '../SpeakerData';

import { Sessions } from 'components/Sessions';

interface ISpeakerCardProps {
	speaker: ISpeaker;
}

export const SpeakerCard = ({ speaker }: ISpeakerCardProps) => {
	const { speakerId, firstName, lastName, sessions } = speaker;
	return (
		<div key={speakerId} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
			<div className="card card-height p-4 mt-4">
				<SpeakerImage speakerId={speakerId} firstName={firstName} lastName={lastName} />
				<SpeakerInfo {...speaker} />
			</div>
			<Sessions sessions={sessions} />
		</div>
	);
};

interface ISpeakerImageProps {
	speakerId: string;
	firstName: string;
	lastName: string;
}

const SpeakerImage = ({ speakerId, firstName, lastName }: ISpeakerImageProps) => {
	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h300">
			<img
				className="contain-fit"
				src={`/images/speaker-${speakerId}.jpg`}
				width="300"
				alt={`image of ${firstName} ${lastName}`}
			/>
		</div>
	);
};

interface ISpeakerInfoProps {
	firstName: string;
	lastName: string;
	bioText: string;
	companyName: string;
	twitterHandle: string;
	favoriteFlag: boolean;
}

const SpeakerInfo = ({ firstName, lastName, bioText, companyName, twitterHandle, favoriteFlag }: ISpeakerInfoProps) => {
	return (
		<div className="speaker-info">
			<div className="d-flex justify-content-between mb-3">
				<h3 className="text-truncate w200">
					{firstName} {lastName}
				</h3>
			</div>
			<div>
				<p className="card-description">{bioText}</p>
				<div className="social d-flex flex-row mt-4">
					<div className="company">
						<h5>Company</h5>
						<h6>{companyName}</h6>
					</div>
					<div className="twitter">
						<h5>Twitter</h5>
						<h6>{twitterHandle}</h6>
					</div>
				</div>
			</div>
		</div>
	);
};