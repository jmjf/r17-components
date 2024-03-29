import { memo, PropsWithChildren, useContext, useState } from 'react';

import { ISpeaker } from '../SpeakerData';
import { SpeakerControlsContext } from 'contexts/SpeakerControlsContext';
import { Sessions } from 'components/Sessions';
import { SpeakerContext, SpeakerContextProvider } from 'contexts/SpeakerContext';
import { DMLFunctionType } from 'hooks/useRequestDelay';
import { DeleteSpeaker } from './DeleteSpeaker';
import ErrorBoundary from './ErrorBoundary';

interface ISpeakerCardProps extends PropsWithChildren {
	speaker: ISpeaker;
	updateSpeaker: DMLFunctionType<ISpeaker>;
	insertSpeaker: DMLFunctionType<ISpeaker>;
	deleteSpeaker: DMLFunctionType<ISpeaker>;
}

export const SpeakerCard = (props: ISpeakerCardProps) => {
	return (
		<ErrorBoundary errorUI={<ErrorSpeakerCard />}>
			<OKSpeakerCard {...props}></OKSpeakerCard>
		</ErrorBoundary>
	);
};

export const OKSpeakerCard = ({ speaker, updateSpeaker, insertSpeaker, deleteSpeaker }: ISpeakerCardProps) => {
	const { showSessionsFlag } = useContext(SpeakerControlsContext);

	return (
		<SpeakerContextProvider
			speaker={speaker}
			updateSpeaker={updateSpeaker}
			insertSpeaker={insertSpeaker}
			deleteSpeaker={deleteSpeaker}
		>
			<div key={speaker.id} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
				<div className="card card-height p-4 mt-4">
					<SpeakerImage />
					<SpeakerInfo />
				</div>
				{showSessionsFlag === true ? <Sessions /> : null}
				<DeleteSpeaker />
			</div>
		</SpeakerContextProvider>
	);
};

export const ErrorSpeakerCard = () => {
	return (
		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
			<div className="card card-height p-4 mt-4">
				<img src="/images/speaker-99999.jpg" />
				<div>
					<b>Error showing speaker</b>
				</div>
			</div>
		</div>
	);
};

interface ImageWithFallbackProps {
	src: string;
	[key: string]: unknown;
}

const ImageWithFallback = memo(
	function ImageWithFallback({ src, ...props }: ImageWithFallbackProps) {
		const [error, setError] = useState(false);
		const [imgSrc, setImgSrc] = useState(src);

		const onError = () => {
			if (!error) {
				setImgSrc('/images/speaker-99999.jpg');
				setError(true);
			}
		};

		return <img src={imgSrc} {...props} onError={onError} />;
	},
	(prevProps, nextProps) => prevProps.src === nextProps.src
);

const SpeakerImage = () => {
	const { speaker } = useContext(SpeakerContext);
	const { id: speakerId, firstName, lastName } = speaker;
	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h300">
			<ImageWithFallback
				className="contain-fit"
				src={`/images/speaker-${speakerId}.jpg`}
				width="300"
				alt={`image of ${firstName} ${lastName}`}
			/>
		</div>
	);
};

const SpeakerInfo = () => {
	const { speaker } = useContext(SpeakerContext);
	const { firstName, lastName, bioText, companyName, twitterHandle } = speaker;
	return (
		<div className="speaker-info">
			<div className="d-flex justify-content-between mb-3">
				<h3 className="text-truncate w200">
					{firstName} {lastName}
				</h3>
			</div>
			<FavoriteToggle />
			<div>
				<p className="card-description">{bioText.substring(0, 70)}</p>
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

const FavoriteToggle = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const { speaker, updateSpeaker } = useContext(SpeakerContext);
	const doneCallback = () => setIsUpdating(false);

	const onClickHandler = () => {
		setIsUpdating(true);
		updateSpeaker({ ...speaker, favoriteFlag: !speaker.favoriteFlag }, doneCallback);
	};

	return (
		<div className="action padB1">
			<span onClick={onClickHandler}>
				<i className={speaker.favoriteFlag === true ? 'fa fa-star orange' : 'fa fa-star-o orange'} /> Favorite{' '}
				{isUpdating ? <span className="fas fa-sync fa-spin"></span> : null}
			</span>
		</div>
	);
};
