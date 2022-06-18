import { useSpeakerControls, ISpeakerControlsState } from 'hooks/useSpeakerControls';
import React, { createContext, PropsWithChildren } from 'react';

interface ISpeakerControlsContextProps extends PropsWithChildren {
	startingShowSessionsFlag: boolean;
}

export const SpeakerControlsContext = createContext<ISpeakerControlsState>({} as ISpeakerControlsState);

export const SpeakerControlsContextProvider = ({
	startingShowSessionsFlag,
	children,
}: ISpeakerControlsContextProps) => {
	const { showSessionsFlag, setShowSessionsFlag } = useSpeakerControls(startingShowSessionsFlag);

	return (
		<SpeakerControlsContext.Provider value={{ showSessionsFlag, setShowSessionsFlag }}>
			{children}
		</SpeakerControlsContext.Provider>
	);
};
