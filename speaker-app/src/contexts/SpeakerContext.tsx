import { DMLFunctionType } from 'hooks/useRequestDelay';
import { createContext, PropsWithChildren } from 'react';
import { ISpeaker } from 'SpeakerData';

interface ISpeakerContextState {
	speaker: ISpeaker;
	updateSpeaker: DMLFunctionType<ISpeaker>;
	deleteSpeaker: DMLFunctionType<ISpeaker>;
	insertSpeaker: DMLFunctionType<ISpeaker>;
}

interface ISpeakerContextProps extends PropsWithChildren, ISpeakerContextState {}

export const SpeakerContext = createContext<ISpeakerContextState>({} as ISpeakerContextState);

export const SpeakerContextProvider = ({
	speaker,
	updateSpeaker,
	insertSpeaker,
	deleteSpeaker,
	children,
}: ISpeakerContextProps) => {
	return (
		<SpeakerContext.Provider value={{ speaker, updateSpeaker, insertSpeaker, deleteSpeaker }}>
			{children}
		</SpeakerContext.Provider>
	);
};
