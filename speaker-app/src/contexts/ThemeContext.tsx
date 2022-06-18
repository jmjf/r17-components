import React, { createContext, PropsWithChildren } from 'react';
import { useTheme, IThemeState, ThemeType } from '../hooks/useTheme';

interface IThemeContextProps extends PropsWithChildren {
	startingTheme: ThemeType;
}

export const ThemeContext = createContext<IThemeState>({} as IThemeState);

export const ThemeContextProvider = ({ startingTheme, children }: IThemeContextProps) => {
	const { themeName, setThemeName } = useTheme(startingTheme);

	return <ThemeContext.Provider value={{ setThemeName, themeName }}>{children}</ThemeContext.Provider>;
};
