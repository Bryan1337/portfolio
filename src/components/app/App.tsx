import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import { IconButton } from '@mui/material';
import 'Components/app/App.css';
import JSONTreeViewer, { JSONData } from 'Components/json/JSONTreeViewer';
import AppTooltip from 'Components/tooltip/AppTooltip';
import { calculateAge } from 'Scripts/timeHelper';
import React, { useState } from 'react';

const aboutData: JSONData = {
	about: {
		name: "Bryan Overduin",
		email: "bryan@overdu.in",
		city: "Leiden",
		age: calculateAge(new Date("1992-09-25")),
		links: {
			website: "https://bryan.overdu.in/",
			linkedin: "https://www.linkedin.com/in/bryan-overduin/",
			github: "https://github.com/Bryan1337",
			gitlab: "https://gitlab.com/Overduin",
		},
		hobbies: [
			"Games",
			"Building things",
			"Playing piano",
			"Learning new things & talents",
		],
		interests: [
			"Automation",
			"Music theory",
			"Fromsoftware games",
			"Exercise",
			"Challenges",
			"AI development",
		],
		favouriteAnimals: [
			"Cat",
			"Dog",
		],
		hasDriversLicense: true,
	},
}

const experienceData: JSONData = {
	experience: {
		cloud: {
			AWS: [
				"ECS",
				"EC2",
				"Route53",
				"S3",
				"CloudFront",
				"CloudWatch",
				"SQS",
				"CDK",
				"CodeBuild",
				"CodeDeploy",
				"CodePipeline",
			],
			other: [
				"Docker",
				"Static site hosting",
			],
		},
		frontend: {
			building: [
				"HTML5",
				"TypeScript",
				"Webpack",
				"Vite",
				"(S)CSS/Less/JSS",
			],
			frameworks: [
				"React",
				"Vue",
				"Next/Nuxt",
				"Redux",
				"Material UI",
				"Vuetify",
				"Bootstrap",
				"Storybook",
			],
			recent: [
				"Vue dashboards for personal automation tooling",
				"Playable Rush Hour puzzle game in React",
			],
			testing: [
				"Cypress",
				"Selenium",
				"BrowserStack",
				"Vitest",
			]
		},
		backend: {
			building: [
				"Node.js",
				"TypeScript",
				"WebSockets",
				"MQTT",
				"REST",
				"SQL",
				"Docker",
				"GraphQL",
			],
			frameworks: [
				"Yii2",
				"Laravel",
				"Express"
			],
			recent: [
				"Node/Express APIs and Socket.IO services for automation dashboards",
				"Discord and DeepL API integration prototypes",
				"GraphQL/Apollo backend for a game prototype",
				"Java-based automation experiements",
			],
			testing: [
				"Codeception",
				"Unit testing",
				"Pytest",
			]
		},
		personalProjects: {
			automation: [
				"Automation dashboards, APIs, and script tooling",
				"Automation plugin and client experiments",
			],
			games: [
				"Rush Hour puzzle game",
			],
		},
		general: {
			spokenLanguages: [
				"Dutch",
				"English (Fluent)"
			],
			building: [
				"Java (Hobby)",
				"Python (Hobby)",
				"Go (Hobby)",
			],
			versionControl: [
				"Git",
				"GitHub",
				"GitLab",
				"Bitbucket",
			],
			other: [
				"Linux",
				"Scrum",
				"Prototyping",
			]
		},
		education: [
			"BSc Computer Science (Hogeschool Leiden 2014-2019)",
			"General Media developer (ROC Leiden 2010-2014)",
		],
		work: [
			"Full stack/Front-end developer @ Sendsteps (2019-2024)",
			"Front-end developer @ Lotify (2024-present)"
		]
	},
}

const projectsData: JSONData = {
	projects: {
		personal: [
			"Automation dashboards and APIs (React/Vue, Node.js, Socket.IO, MySQL, AWS CDK)",
			"Rush Hour puzzle game (React, Redux, Material UI, AWS S3)",
			"3D card generator proof of concept (React, Vite, Three.js)",
			"RuneLite and DreamBot tooling experiments (Java, Gradle, scripting APIs)",
			"Discord and DeepL integration prototypes (Vue, Express, TypeScript)",
		],
		professional: [
			"React webapplication (Sendsteps)",
			"Node.js queueing/realtime systems (Sendsteps)",
			"Yii2 API (Sendsteps)",
			"Vue/Vite front-end work (Lotify)",
			"Component-focused UI work (Lotify)",
		]
	},
}

const TopBar = () => {

	return (
		<div style={{
			height: 64,
			width: '100%',
			border: `1px solid #404040`,
			borderTop: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#181818',
		}} >
			<small>
				Portfolio:// Bryan Overduin
			</small>
		</div>
	)
}

interface SideBarProps {
	setJsonData: (jsonData: JSONData) => void;
}

const SideBar = ({
	setJsonData,
}: SideBarProps) => {

	const openRushHourUrl = () => {

		window.open("http://rush-hour.overdu.in.s3-website-us-east-1.amazonaws.com/", "_blank");
	}

	return (
		<div style={{
			width: 64,
			height: '100%',
			border: `1px solid #404040`,
			borderTop: 'none',
			paddingTop: 16,
			textAlign: 'center',
			backgroundColor: '#181818',
		}}>
			<AppTooltip title="About" arrow placement="right">
				<IconButton
					onClick={() => setJsonData(aboutData)}
					color="inherit">
					<PsychologyAltIcon color="inherit" />
				</IconButton>
			</AppTooltip>
			<div style={{ paddingTop: 16 }} />
			<AppTooltip title="Experience" arrow placement="right">
				<IconButton
					onClick={() => setJsonData(experienceData)}
					color="inherit">
					<CodeIcon color="inherit" />
				</IconButton>
			</AppTooltip>
			<div style={{ paddingTop: 16 }} />
			<AppTooltip title="Projects" arrow placement="right">
				<IconButton
					onClick={() => setJsonData(projectsData)}
					color="inherit">
					<ConstructionIcon color="inherit" />
				</IconButton>
			</AppTooltip>
			<div style={{ paddingTop: 16 }} />
			<AppTooltip title="Play Rush Hour (Puzzle game, opens in new window)" arrow placement="right">
				<IconButton
					onClick={() => openRushHourUrl()}
					color="inherit">
					<LocalShippingIcon color="inherit" />
				</IconButton>
			</AppTooltip>
			<div style={{ paddingTop: 16 }} />
		</div>
	)
}

interface AppWrapperProps {
	setJsonData: (jsonData: JSONData) => void;
	children: React.ReactNode;
}

const AppWrapper = ({
	children,
	setJsonData,
}: AppWrapperProps) => {

	return (
		<div style={{ height: '100%', overflow:'hidden'}}>
			<TopBar />
			<div style={{  height: 'calc(100% - 64px)' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					<SideBar
						setJsonData={setJsonData}
					/>
					<div style={{
						padding: 64,
						height: 'calc(100% - 128px)',
						overflowY: 'auto',
						flexGrow: 1,
					}}>
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}

const App = () => {

	const [jsonData, setJsonData] = useState<JSONData>(aboutData);

	return (
		<AppWrapper setJsonData={setJsonData}>
			<JSONTreeViewer
				data={jsonData}
			/>
		</AppWrapper>
	)
}

export default App;
