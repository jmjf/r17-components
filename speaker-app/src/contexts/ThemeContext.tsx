import React, { createContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

interface IThemeContext {
	themeName: ThemeType;
	setThemeName: (value: ThemeType) => void;
}

interface IThemeContextProps {
	startingTheme: ThemeType;
	children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeContextProvider = ({ startingTheme, children }: IThemeContextProps) => {
	const [themeName, setThemeName] = useState(startingTheme);

	return <ThemeContext.Provider value={{ setThemeName, themeName }}>{children}</ThemeContext.Provider>;
};
