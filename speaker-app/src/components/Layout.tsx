import React, { createContext, useState } from 'react';

export type ThemeType = 'light' | 'dark';

interface IThemeContext {
	themeName: ThemeType;
	setThemeName: (value: ThemeType) => void;
}

interface ILayoutProps {
	startingTheme: ThemeType;
	children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const Layout = ({ startingTheme, children }: ILayoutProps) => {
	const [themeName, setThemeName] = useState(startingTheme);

	return (
		<ThemeContext.Provider value={{ setThemeName, themeName }}>
			<div className={`container-fluid ${themeName}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
