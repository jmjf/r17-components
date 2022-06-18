import { PropsWithChildren, useContext } from 'react';
import { ThemeType } from 'hooks/useTheme';
import { ThemeContext, ThemeContextProvider } from '../contexts/ThemeContext';

interface ILayoutProps extends PropsWithChildren {
	startingTheme: ThemeType;
}

export const Layout = ({ startingTheme, children }: ILayoutProps) => {
	return (
		<ThemeContextProvider startingTheme={startingTheme}>
			<LayoutNoThemeContextProvider>{children}</LayoutNoThemeContextProvider>
		</ThemeContextProvider>
	);
};

const LayoutNoThemeContextProvider = ({ children }: PropsWithChildren) => {
	const { themeName } = useContext(ThemeContext);

	return <div className={`container-fluid ${themeName}`}>{children}</div>;
};
