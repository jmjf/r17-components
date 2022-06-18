import { createContext, PropsWithChildren } from 'react';
import { ISpeaker } from 'SpeakerData';

interface ISpeakerContextState {
	speaker: ISpeaker;
	updateSpeaker: (speaker: ISpeaker, doneCallback: () => void) => void;
}

interface ISpeakerContextProps extends PropsWithChildren, ISpeakerContextState {}

export const SpeakerContext = createContext<ISpeakerContextState>({} as ISpeakerContextState);

export const SpeakerContextProvider = ({ speaker, updateSpeaker, children }: ISpeakerContextProps) => {
	return <SpeakerContext.Provider value={{ speaker, updateSpeaker }}>{children}</SpeakerContext.Provider>;
};
