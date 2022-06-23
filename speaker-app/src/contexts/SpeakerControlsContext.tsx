import { useSpeakerControls, ISpeakerControlsState } from 'hooks/useSpeakerControls';
import React, { createContext, PropsWithChildren } from 'react';

interface ISpeakerControlsContextProps extends PropsWithChildren {
	startingShowSessionsFlag?: boolean;
	startingEventYear?: string;
}

export const SpeakerControlsContext = createContext<ISpeakerControlsState>({} as ISpeakerControlsState);

export const SpeakerControlsContextProvider = ({
	startingShowSessionsFlag = false,
	startingEventYear = '2019',
	children,
}: ISpeakerControlsContextProps) => {
	const { showSessionsFlag, setShowSessionsFlag, eventYear, setEventYear, searchText, setSearchText, EVENT_YEARS } =
		useSpeakerControls(startingShowSessionsFlag, startingEventYear);

	return (
		<SpeakerControlsContext.Provider
			value={{
				showSessionsFlag,
				setShowSessionsFlag,
				eventYear,
				setEventYear,
				searchText,
				setSearchText,
				EVENT_YEARS,
			}}
		>
			{children}
		</SpeakerControlsContext.Provider>
	);
};
