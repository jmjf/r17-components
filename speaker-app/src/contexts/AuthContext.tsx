import { createContext, useState, PropsWithChildren, SetStateAction, Dispatch } from 'react';

interface IAuthContextState {
	loggedInUserName: string;
	setLoggedInUserName: Dispatch<SetStateAction<string>>;
}

interface IAuthContextParams extends PropsWithChildren {
	loggedInUserName: string; // not pretty, but keeping them together makes it easier to keep in sync
}

export interface IAuthContextProps extends PropsWithChildren, IAuthContextState {}

export const AuthContext = createContext<IAuthContextState>({} as IAuthContextState);

export const AuthContextProvider = ({ loggedInUserName: defaultUserName, children }: IAuthContextParams) => {
	const [loggedInUserName, setLoggedInUserName] = useState(defaultUserName);
	return <AuthContext.Provider value={{ loggedInUserName, setLoggedInUserName }}>{children}</AuthContext.Provider>;
};
