import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton, Tooltip } from '@mui/material';
import 'Components/app/App.css';
import JSONTreeViewer from 'Components/json/JSONTreeViewer';
import { calculateAge } from 'Scripts/timeHelper';
import React from 'react';


const jsonData = {
	about: {
		name: "Bryan Overduin",
		email: "bryan@overdu.in",
		city: "Leiden",
		age: calculateAge(new Date("1992-09-25")),
		hobbies: [
			"Games",
			"Building things",
			"Playing piano",
			"Learning new things & talents",
		],
		interests: [
			"Automation",
			"Music theory",
			"Fromsoftware games (Theyre really good, seriously)",
			"Exercising",
			"Challenging myself",
			"AI",
		],
		links: {
			gitHub: "https://github.com/Bryan1337",
			gitLab: "https://gitlab.com/Overduin",
		},
		favouriteAnimals: [
			"Cat",
			"Dog",
		],
	},
	skills: {
		cloud: {
			AWS: [
				"ECS",
				"EC2",
				"Route53",
				"S3",
				"CloudFront",
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
			],
			testing: [
				"Codeception",
				"Unit testing"
			]
		},
		general: {
			spokenLanguages: [
				"Dutch",
				"English"
			],
			building: [
				"Java",
				"Python",
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
		}
	},
	projects: {
		personal: [
			"Automation scripts (Runescape bots)",
			"Rush hour",
			"ChatGPT whatsapp bot",
		]
	},
	education: [
		"BSc Computer Science (Hogeschool Leiden 2014-2019)",
		"General Media developer (ROC Leiden 2010-2014)",
	],
	workExperience: [
		"Full stack/Front-end developer @ Sendsteps (2019-2024)",
	]
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
		}} >
			<small>
				Portfolio:// Bryan Overduin
			</small>
		</div>
	)

}

const SideBar = () => {

	return (
		<div style={{
			width: 64,
			height: '100%',
			border: `1px solid #404040`,
			borderTop: 'none',
			paddingTop: 16,
			textAlign: 'center',
		}}>
			<Tooltip title="Projects" arrow placement="right">
				<IconButton color="inherit">
					<CodeIcon color="inherit" />
				</IconButton>
			</Tooltip>
			<div style={{ paddingTop: 16 }} />
			<Tooltip title="About" arrow placement="right">
				<IconButton color="inherit">
					<InfoIcon color="inherit" />
				</IconButton>
			</Tooltip>
		</div>
	)
}

const AppWrapper = ({ children }) => {

	return (
		<div style={{ height: '100%', overflow:'hidden'}}>
			<TopBar />
			<div style={{  height: 'calc(100% - 64px)' }}>
				<div style={{ display: 'flex', height: '100%' }}>
					<SideBar />
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

	return (
		<AppWrapper>
			<JSONTreeViewer
				data={jsonData}
			/>
		</AppWrapper>
	)
}

export default App;
