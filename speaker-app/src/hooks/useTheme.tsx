import { useState } from 'react';

export type ThemeType = 'light' | 'dark';
export interface IThemeState {
	themeName: ThemeType;
	setThemeName: (newThemeName: ThemeType) => void;
}

export const useTheme = (startingTheme = 'light' as ThemeType): IThemeState => {
	const [themeName, setThemeName] = useState(startingTheme);

	const validateTheme = (newThemeName: ThemeType): void => {
		setThemeName(newThemeName === 'dark' ? 'dark' : 'light');
	};

	return { themeName, setThemeName: validateTheme };
};
