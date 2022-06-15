interface ISpeakerInfoProps {
	firstName: string;
	lastName: string;
	bioText: string;
	companyName: string;
	twitterHandle: string;
	favoriteFlag: boolean;
}

export const SpeakerInfo = ({
	firstName,
	lastName,
	bioText,
	companyName,
	twitterHandle,
	favoriteFlag,
}: ISpeakerInfoProps) => {
	return (
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
	);
};
