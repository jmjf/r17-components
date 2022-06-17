import { IRequestData } from 'hooks/useRequestDelay';

export interface IRoom {
	roomName: string;
	maxPeopleCount: number;
}

export interface ISession {
	sessionId: string;
	sessionName: string;
	eventYear: string;
	room: IRoom;
}

export interface ISpeaker extends IRequestData {
	id: string;
	firstName: string;
	lastName: string;
	companyName: string;
	bioText: string;
	twitterHandle: string;
	favoriteFlag: boolean;
	sessions: ISession[];
}

export const getSpeakerData = (): ISpeaker[] => {
	return data;
};

const data: ISpeaker[] = [
	{
		id: '1269',
		firstName: 'Arun',
		lastName: 'Gupta',
		companyName: 'Amazon',
		bioText: 'Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. ',
		twitterHandle: 'arungupta',
		favoriteFlag: true,
		sessions: [
			{
				sessionId: '32',
				sessionName: 'Rails powered by GlassFish',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '58',
				sessionName: 'Metro: Hello World to .NET 3.5 interoperable Web service',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '61',
				sessionName: 'GlassFish: On a mission to please developers',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '263',
				sessionName: 'Java EE 6 and GlassFish v3: Paving the path for future',
				eventYear: '2009',
				room: {
					roomName: '5502',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '264',
				sessionName: 'Using Eclipse for Java EE 6 development for the GlassFish™ Application Server',
				eventYear: '2009',
				room: {
					roomName: '5503',
					maxPeopleCount: 44,
				},
			},
			{
				sessionId: '265',
				sessionName: 'Dynamic Languages &amp; Web Frameworks in GlassFish',
				eventYear: '2009',
				room: {
					roomName: '4204',
					maxPeopleCount: 45,
				},
			},
			{
				sessionId: '440',
				sessionName: 'Java EE 6: Doing More With Less',
				eventYear: '2010',
				room: {
					roomName: '8401',
					maxPeopleCount: 48,
				},
			},
			{
				sessionId: '441',
				sessionName: 'OSGi and Java EE in GlassFish',
				eventYear: '2010',
				room: {
					roomName: '4220',
					maxPeopleCount: 50,
				},
			},
			{
				sessionId: '444',
				sessionName: 'Running your Java EE 6 application in the Cloud',
				eventYear: '2010',
				room: {
					roomName: '3106',
					maxPeopleCount: 45,
				},
			},
			{
				sessionId: '766',
				sessionName: 'Deploy and Monitor your Java EE 6 session in a fully-clustered GlassFish',
				eventYear: '2011',
				room: {
					roomName: '4201',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '770',
				sessionName: 'The Java EE 7 Platform: Developing for the Cloud',
				eventYear: '2011',
				room: {
					roomName: '4201',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '864',
				sessionName: 'RESTful Java on Steroids: JAX-RS 2.0',
				eventYear: '2012',
				room: {
					roomName: '5502',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '1131',
				sessionName: '50 new features of Java EE 7 in 50 minutes',
				eventYear: '2013',
				room: {
					roomName: '3525',
					maxPeopleCount: 110,
				},
			},
			{
				sessionId: '1262',
				sessionName: 'Minecraft Modding Workshop (Part 1 of 2)',
				eventYear: '2013',
				room: {
					roomName: 'PSEC4603',
					maxPeopleCount: 1,
				},
			},
			{
				sessionId: '1352',
				sessionName: 'Minecraft Modding Workshop (Part 2 of 2)',
				eventYear: '2013',
				room: {
					roomName: 'PSEC4603',
					maxPeopleCount: 1,
				},
			},
			{
				sessionId: '1440',
				sessionName: ' All about WildFly, Only using demos',
				eventYear: '2014',
				room: {
					roomName: '4302',
					maxPeopleCount: 41,
				},
			},
			{
				sessionId: '1441',
				sessionName: 'Java EE 7 development using Eclipse',
				eventYear: '2014',
				room: {
					roomName: '4301',
					maxPeopleCount: 64,
				},
			},
			{
				sessionId: '2529',
				sessionName: 'Introductory Minecraft Modding with Forge - Part 1',
				eventYear: '2014',
				room: {
					roomName: 'PSEC4501',
					maxPeopleCount: 73,
				},
			},
			{
				sessionId: '2557',
				sessionName: 'Introductory Minecraft Modding with Forge - Part II',
				eventYear: '2014',
				room: {
					roomName: 'PSEC4501',
					maxPeopleCount: 73,
				},
			},
			{
				sessionId: '3694',
				sessionName: 'Docker and Kubernetes Recipes for Java Applications',
				eventYear: '2015',
				room: {
					roomName: 'AD-123',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '4835',
				sessionName: 'Docker and Kubernetes Workshop',
				eventYear: '2015fall',
				room: {
					roomName: 'RD-301',
					maxPeopleCount: 42,
				},
			},
			{
				sessionId: '4860',
				sessionName: 'Minecraft Modding with Forge - Part 1',
				eventYear: '2015',
				room: {
					roomName: 'AB-142',
					maxPeopleCount: 78,
				},
			},
			{
				sessionId: '5922',
				sessionName: 'Minecraft Modding with Forge - Part 2',
				eventYear: '2015',
				room: {
					roomName: 'AB-142',
					maxPeopleCount: 78,
				},
			},
			{
				sessionId: '6060',
				sessionName: 'Package, Deploy, Scale Your Applications Using Docker and Kubernetes',
				eventYear: '2016fall',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '6205',
				sessionName: 'Service Discovery in Container Orchestration Frameworks',
				eventYear: '2017',
				room: {
					roomName: 'Town Square C',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7379',
				sessionName: 'Java developer’s journey in Kubernetes land',
				eventYear: '2018',
				room: {
					roomName: 'Fireside C',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '7486',
				sessionName: 'Using Kubernetes for Machine Learning Frameworks',
				eventYear: '2019',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
		],
	},
	{
		id: '8590',
		firstName: 'Chris',
		lastName: 'Richardson',
		companyName: 'Eventuate, Inc',
		bioText: 'Founder of Eventuate, Author of POJOs in Action, creator of the original Cloud Foundry',
		twitterHandle: 'crichardson',
		favoriteFlag: false,
		sessions: [
			{
				sessionId: '1011',
				sessionName: 'Decomposing applications for scalability and deployability',
				eventYear: '2012',
				room: {
					roomName: '4306',
					maxPeopleCount: 100,
				},
			},
			{
				sessionId: '1133',
				sessionName: 'Developing polyglot persistence applications',
				eventYear: '2013',
				room: {
					roomName: '5502',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '1136',
				sessionName: 'Consuming web services asynchronously with Futures and Rx Observables',
				eventYear: '2013',
				room: {
					roomName: '8338',
					maxPeopleCount: 120,
				},
			},
			{
				sessionId: '1454',
				sessionName: 'Developing applications with a micro-service architecture',
				eventYear: '2014',
				room: {
					roomName: '8338',
					maxPeopleCount: 120,
				},
			},
			{
				sessionId: '1455',
				sessionName: 'Map, flatmap and reduce are your new best friends',
				eventYear: '2014',
				room: {
					roomName: '5502',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '4765',
				sessionName: 'Developing event-driven microservices with event sourcing and CQRS',
				eventYear: '2015',
				room: {
					roomName: 'AB-201',
					maxPeopleCount: 66,
				},
			},
			{
				sessionId: '6080',
				sessionName: 'Developing Microservices with Aggregates',
				eventYear: '2016',
				room: {
					roomName: 'RF-141',
					maxPeopleCount: 58,
				},
			},
			{
				sessionId: '6214',
				sessionName: 'There Is No Such Thing as a Microservice!',
				eventYear: '2017',
				room: {
					roomName: 'Town Square C',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7401',
				sessionName: 'Developing Asynchronous, Message-Driven Microservices',
				eventYear: '2018',
				room: {
					roomName: 'Round Table',
					maxPeopleCount: 75,
				},
			},
			{
				sessionId: '7402',
				sessionName: 'Microservices: Decomposing Applications for Testability and Deployability',
				eventYear: '2018',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7460',
				sessionName: 'Microservices and Serverless Speaker Panel – The Road Ahead',
				eventYear: '2018',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7515',
				sessionName: 'Cubes, Hexagons and More: Understanding the Microservices Through Shapes',
				eventYear: '2019',
				room: {
					roomName: 'Town Square C',
					maxPeopleCount: 130,
				},
			},
		],
	},
	{
		id: '5443',
		firstName: 'Mark',
		lastName: 'Abramson',
		companyName: 'Printform Corporation',
		bioText: 'Mark is a globally recognized expert on digital printing for industrial and packaging applications.',
		twitterHandle: 'mark__a',
		favoriteFlag: true,
		sessions: [
			{
				sessionId: '676',
				sessionName: 'Accelerate your database development with Object-Relational Mapping (OR/M) in .NET',
				eventYear: '2011',
				room: {
					roomName: '8401',
					maxPeopleCount: 48,
				},
			},
			{
				sessionId: '677',
				sessionName: 'Introduction to Database Design with Entity Relationship (ER) Diagrams',
				eventYear: '2011',
				room: {
					roomName: '5501',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '859',
				sessionName: 'Database Design Troubleshooting, repair and wart removal',
				eventYear: '2012',
				room: {
					roomName: '3525',
					maxPeopleCount: 110,
				},
			},
			{
				sessionId: '861',
				sessionName: 'Introduction to Database Design with Entity Relationship (ER) Diagrams',
				eventYear: '2012',
				room: {
					roomName: '3525',
					maxPeopleCount: 110,
				},
			},
			{
				sessionId: '1120',
				sessionName: 'Intro to Relational Database Design & Entity-Relationship Diagrams',
				eventYear: '2013',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '1125',
				sessionName: 'Advanced Data Modeling with Entity Relationship Diagrams',
				eventYear: '2013',
				room: {
					roomName: 'PSEC4501',
					maxPeopleCount: 73,
				},
			},
			{
				sessionId: '1435',
				sessionName: 'Intro to Relational Database Design & Entity-Relationship Diagrams',
				eventYear: '2014',
				room: {
					roomName: '8402',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '2577',
				sessionName: 'Lean Startup for Engineers',
				eventYear: '2014',
				room: {
					roomName: '8402',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '4819',
				sessionName: 'Lean Startup for Engineers',
				eventYear: '2015',
				room: {
					roomName: 'AC-162',
					maxPeopleCount: 77,
				},
			},
			{
				sessionId: '6184',
				sessionName: 'Lean Startup for Engineers',
				eventYear: '2017',
				room: {
					roomName: 'Fireside D',
					maxPeopleCount: 80,
				},
			},
		],
	},
	{
		id: '1124',
		firstName: 'Douglas',
		lastName: 'Crockford',
		companyName: 'PayPal',
		bioText:
			'Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.',
		twitterHandle: 'notatweeter',
		favoriteFlag: true,
		sessions: [
			{
				sessionId: '12',
				sessionName: 'JavaScript: The Good Parts (Part 1)',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '121',
				sessionName: 'JavaScript: The Good Parts (Part 2)',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '176',
				sessionName: 'JavaScript: The Good Parts',
				eventYear: '2009',
				room: {
					roomName: '5501',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '177',
				sessionName: 'JavaScript Town Meeting',
				eventYear: '2009',
				room: {
					roomName: '5501',
					maxPeopleCount: 70,
				},
			},
			{
				sessionId: '371',
				sessionName: 'JavaScript: The Good Parts',
				eventYear: '2010',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '536',
				sessionName: 'Talk with Crock',
				eventYear: '2010',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '588',
				sessionName: 'ECMAScript 5: The New Parts',
				eventYear: '2011',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '589',
				sessionName: 'ECMAScript: What Next?',
				eventYear: '2011',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '833',
				sessionName: 'Programming Style and Your Brain',
				eventYear: '2012',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1056',
				sessionName: 'Monads and Gonads',
				eventYear: '2012',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1198',
				sessionName: 'Fun with Functions (Part 1)',
				eventYear: '2013',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1199',
				sessionName: 'Fun with Functions (Part 2)',
				eventYear: '2013',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1390',
				sessionName: 'Fun with Functions in JavaScript (Full Day)',
				eventYear: '2014',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '1416',
				sessionName: 'The Better Parts',
				eventYear: '2014',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '3643',
				sessionName: 'Managing Programmers. Programmers are not like the other kids',
				eventYear: '2014',
				room: {
					roomName: '1501',
					maxPeopleCount: 190,
				},
			},
			{
				sessionId: '3687',
				sessionName: 'The Better Parts',
				eventYear: '2015',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '3696',
				sessionName: 'Managing Programmers',
				eventYear: '2015',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '4726',
				sessionName: 'Upgrading the Web',
				eventYear: '2015sf',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '5987',
				sessionName: 'The Seif Project Continued',
				eventYear: '2016',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '6171',
				sessionName: 'The Post Javascript Apocalypse',
				eventYear: '2016',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '6208',
				sessionName: 'Numbers',
				eventYear: '2017',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '6209',
				sessionName: 'Character Sets',
				eventYear: '2017',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7256',
				sessionName: 'Principles of Security',
				eventYear: '2017',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7417',
				sessionName: 'How JavaScript Works',
				eventYear: '2018',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7418',
				sessionName: 'Q&A With Douglas Crockford',
				eventYear: '2018',
				room: {
					roomName: 'Fireside A',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '7465',
				sessionName: 'Web Panel with Douglas Crockford, Steve Souders and Mike North',
				eventYear: '2018',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7489',
				sessionName: 'The History of JSON',
				eventYear: '2019',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7569',
				sessionName: 'You Can Count on Numbers',
				eventYear: '2019',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
		],
	},
	{
		id: '10801',
		firstName: 'Troy',
		lastName: 'Miles',
		companyName: 'Kelley Blue Book',
		bioText: 'An award winning developer and author.',
		twitterHandle: 'therockncoder',
		favoriteFlag: false,
		sessions: [
			{
				sessionId: '1252',
				sessionName: 'Beginning HTML5 Mobile Game Programming',
				eventYear: '2013',
				room: {
					roomName: '8338',
					maxPeopleCount: 120,
				},
			},
			{
				sessionId: '1444',
				sessionName: 'Intro to Mobile Game Programming with Cocos2d-x, Part 1',
				eventYear: '2014',
				room: {
					roomName: '4220',
					maxPeopleCount: 50,
				},
			},
			{
				sessionId: '1445',
				sessionName: 'Intro to Mobile Game Programming with Cocos2d-x, Part 2',
				eventYear: '2014',
				room: {
					roomName: '4220',
					maxPeopleCount: 50,
				},
			},
			{
				sessionId: '6085',
				sessionName: 'Functional Programming in JavaScript',
				eventYear: '2016',
				room: {
					roomName: 'Gullo II',
					maxPeopleCount: 200,
				},
			},
			{
				sessionId: '7242',
				sessionName: 'Creating an AWS Lambda Function with Kotlin',
				eventYear: '2017',
				room: {
					roomName: 'Fireside D',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '7346',
				sessionName: 'C++ Web Servers and APIs',
				eventYear: '2018',
				room: {
					roomName: 'Fireside A',
					maxPeopleCount: 80,
				},
			},
		],
	},
	{
		id: '47343',
		firstName: 'Eve',
		lastName: 'Porcello',
		companyName: 'Moon Highway',
		bioText: 'Eve Porcello is an instructor at Moon Highway, egghead.io, and LinkedIn Learning.',
		twitterHandle: 'eveporcello',
		favoriteFlag: true,
		sessions: [
			{
				sessionId: '7548',
				sessionName: 'React Is Your Friend: A Gentle Intro to the React Library',
				eventYear: '2019',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
		],
	},
	{
		id: '14918',
		firstName: 'Claudia',
		lastName: 'Galvan',
		companyName: 'Early Stage Innovation',
		bioText: 'Claudia is a leading expert on product internationalization',
		twitterHandle: 'cgalvan',
		favoriteFlag: false,
		sessions: [
			{
				sessionId: '4820',
				sessionName: 'Innovation for Women Engineers',
				eventYear: '2015',
				room: {
					roomName: 'RE-311',
					maxPeopleCount: 68,
				},
			},
			{
				sessionId: '6012',
				sessionName: 'Internationalization at Startups',
				eventYear: '2016',
				room: {
					roomName: 'S-160',
					maxPeopleCount: 60,
				},
			},
			{
				sessionId: '7341',
				sessionName: 'Advancing your Career through technical leadership skills ',
				eventYear: '2018',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7497',
				sessionName: 'GDPR and Privacy Around the World',
				eventYear: '2019',
				room: {
					roomName: 'Fireside B',
					maxPeopleCount: 80,
				},
			},
		],
	},
	{
		id: '46769',
		firstName: 'Mary',
		lastName: 'Grygleski',
		companyName: 'IBM',
		bioText: 'Mary is a passionate developer advocate by day, and a very active tech community organizer by night.',
		twitterHandle: 'mgrygles',
		favoriteFlag: true,
		sessions: [
			{
				sessionId: '7549',
				sessionName: 'A Gentle Intro to Reactive Java Programming and Systems',
				eventYear: '2019',
				room: {
					roomName: 'Fireside A',
					maxPeopleCount: 80,
				},
			},
		],
	},
	{
		id: '8367',
		firstName: 'Gayle Laakmann',
		lastName: 'McDowell',
		companyName: 'CareerCup',
		bioText: 'Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.',
		twitterHandle: 'gayle',
		favoriteFlag: false,
		sessions: [
			{
				sessionId: '944',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2012',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1086',
				sessionName: 'Cracking the Coding Interview: Advice for Devs and PM Interviews',
				eventYear: '2013',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1412',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2014',
				room: {
					roomName: 'SmithWick',
					maxPeopleCount: 1000,
				},
			},
			{
				sessionId: '1413',
				sessionName: 'Cracking the Product Manager Interview',
				eventYear: '2014',
				room: {
					roomName: '5015',
					maxPeopleCount: 217,
				},
			},
			{
				sessionId: '3701',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2015',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '3703',
				sessionName: 'Cracking the Product Manager Interview',
				eventYear: '2015',
				room: {
					roomName: 'SC-127',
					maxPeopleCount: 250,
				},
			},
			{
				sessionId: '5984',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2016',
				room: {
					roomName: 'VPA-Theater',
					maxPeopleCount: 395,
				},
			},
			{
				sessionId: '5986',
				sessionName: 'Be a Better Interviewer: How to Interview Like Google (or not)-But Better!',
				eventYear: '2016',
				room: {
					roomName: 'SC-127',
					maxPeopleCount: 250,
				},
			},
			{
				sessionId: '6227',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2017',
				room: {
					roomName: 'Fireside B',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '6229',
				sessionName: 'Hiring Coders with Whiteboard Interviews and Other Questions',
				eventYear: '2017',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7366',
				sessionName: 'Cracking the Coding Interview',
				eventYear: '2018',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7367',
				sessionName: 'Interview Like Google (or not)-But Better!',
				eventYear: '2018',
				room: {
					roomName: 'Town Square A',
					maxPeopleCount: 130,
				},
			},
			{
				sessionId: '7368',
				sessionName: 'Cracking the Product Manager Interview',
				eventYear: '2018',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
		],
	},
	{
		id: '620',
		firstName: 'Ron',
		lastName: 'Kleinman',
		companyName: 'De Anza College',
		bioText: 'Ron teaches Object Oriented Analysis and Design at De Anza College ',
		twitterHandle: 'notweets',
		favoriteFlag: false,
		sessions: [
			{
				sessionId: '86',
				sessionName: 'The Performance Limitations  of the Java Platform ... and how to avoid them',
				eventYear: '2008',
				room: {
					roomName: 'Cornell Hall',
					maxPeopleCount: 0,
				},
			},
			{
				sessionId: '6089',
				sessionName: 'So your mom always wanted you to be an architect',
				eventYear: '2016',
				room: {
					roomName: 'C209',
					maxPeopleCount: 55,
				},
			},
			{
				sessionId: '7440',
				sessionName: 'How to Think like a Software Architect',
				eventYear: '2018',
				room: {
					roomName: 'Fireside A',
					maxPeopleCount: 80,
				},
			},
			{
				sessionId: '7551',
				sessionName: 'How to "think" (and design) like a Software Architect',
				eventYear: '2019',
				room: {
					roomName: 'Town Square B',
					maxPeopleCount: 130,
				},
			},
		],
	},
];
