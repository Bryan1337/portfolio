import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
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
			website: "https://bryan.overduin.in",
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
			]
		},
		frontend: {
			building: [
				"HTML5",
				"TypeScript",
				"Webpack",
				"(S)CSS/Less/JSS",
			],
			frameworks: [
				"ReactJS",
				"NextJS",
				"Redux",
				"MaterialUI",
				"Bootstrap",
				"Storybook",
			],
			testing: [
				"Cypress",
				"Selenium",
				"Browserstack",
			]
		},
		backend: {
			building: [
				"Node.js",
				"TypeScript",
				"Websockets",
				"REST",
				"SQL",
				"Docker",
			],
			frameworks: [
				"Yii2",
				"Laravel",
				"Express"
			],
			testing: [
				"Codeception",
				"Unit testing"
			]
		},
		general: {
			spokenLanguages: [
				"Dutch",
				"English (Fluent)"
			],
			building: [
				"Java (Hobby)",
				"Python (Hobby)",
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
			]
		},
		education: [
			"BSc Computer Science (Hogeschool Leiden 2014-2019)",
			"General Media developer (ROC Leiden 2010-2014)",
		],
		work: [
			"Full stack/Front-end developer @ Sendsteps (2019-2024)",
		]
	},
}

const projectsData: JSONData = {
	projects: {
		personal: [
			"Automation scripts (Runescape bots)",
			"Rush hour (Github)",
			"ChatGPT whatsapp bot (Github)",
			"Personal portfolio website (This one)",
			"Portfolio website for a friend (Github)",
		],
		professional: [
			"ReactJS webapplication (Sendsteps)",
			"NodeJS queueing system (Sendsteps)",
			"Yii2 API (Sendsteps)",
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
