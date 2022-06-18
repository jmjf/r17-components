import { Dispatch, SetStateAction, useState } from 'react';

export interface ISpeakerControlsState {
	showSessionsFlag: boolean;
	setShowSessionsFlag: Dispatch<SetStateAction<boolean>>;
	eventYear: string;
	setEventYear: Dispatch<SetStateAction<string>>;
	searchText: string;
	setSearchText: Dispatch<SetStateAction<string>>;
	EVENT_YEARS: string[];
}

export const useSpeakerControls = (
	startingShowSessionsFlag = true,
	startingEventYear = '2019'
): ISpeakerControlsState => {
	const [showSessionsFlag, setShowSessionsFlag] = useState(startingShowSessionsFlag);
	const [eventYear, setEventYear] = useState(startingEventYear);
	const [searchText, setSearchText] = useState('');

	const EVENT_YEARS = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];

	return {
		showSessionsFlag,
		setShowSessionsFlag,
		eventYear,
		setEventYear,
		searchText,
		setSearchText,
		EVENT_YEARS,
	};
};
