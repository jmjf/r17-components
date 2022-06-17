import React, { createContext, Dispatch, SetStateAction } from 'react';
import { useTheme } from '../hooks/useTheme';

export type ThemeType = 'light' | 'dark';

interface IThemeContext {
	themeName: ThemeType;
	setThemeName: (newThemeName: ThemeType) => void;
}

interface IThemeContextProps {
	startingTheme: ThemeType;
	children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ startingTheme, children }: IThemeContextProps) => {
	const { themeName, setThemeName } = useTheme(startingTheme);

	return <ThemeContext.Provider value={{ setThemeName, themeName }}>{children}</ThemeContext.Provider>;
};
