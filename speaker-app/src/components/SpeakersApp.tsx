import { createContext, useState } from 'react';

import { Header } from './Header';
import { Speakers } from './Speakers';

export interface IThemeContext {
	themeName: string;
	setThemeName: (value: string) => void;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const SpeakersApp = () => {
	const [themeName, setThemeName] = useState('light');

	return (
		<ThemeContext.Provider value={{ setThemeName, themeName }}>
			<div className={`container-fluid ${themeName}`}>
				<Header />
				<Speakers />
			</div>
		</ThemeContext.Provider>
	);
};
