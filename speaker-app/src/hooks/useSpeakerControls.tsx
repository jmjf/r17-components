import { Dispatch, SetStateAction, useState } from 'react';

export interface ISpeakerControlsState {
	showSessionsFlag: boolean;
	setShowSessionsFlag: Dispatch<SetStateAction<boolean>>;
}

export const useSpeakerControls = (startingShowSessionsFlag = true): ISpeakerControlsState => {
	const [showSessionsFlag, setShowSessionsFlag] = useState(startingShowSessionsFlag);

	return { showSessionsFlag, setShowSessionsFlag };
};
