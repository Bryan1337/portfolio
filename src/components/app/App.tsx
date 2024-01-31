import 'Components/app/App.css';
import React, { Fragment } from 'react';



const calculateAge = (birthDate: Date) => {

	const today = new Date();

	const birthDateInMilliseconds = birthDate.getTime();

	const todayInMilliseconds = today.getTime();

	const ageInMilliseconds = todayInMilliseconds - birthDateInMilliseconds;

	const ageInSeconds = ageInMilliseconds / 1000;

	const ageInMinutes = ageInSeconds / 60;

	const ageInHours = ageInMinutes / 60;

	const ageInDays = ageInHours / 24;

	const ageInYears = ageInDays / 365;

	return Math.floor(ageInYears);
}

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
			"Learning useless talents",
			"Learning not so uselss talents",
		],
		interests: [
			"Automation",
			"Music theory",
			"Fromsoftware games (Theyre really good, seriously)",
			"Exercising",
			"Difficult challenges",
			"AI",
		],
		spokenLanguages: [
			"Dutch",
			"English"
		],
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
			"Automation scripts (Ask me, I dare you)",
			"Rush hour",
			"ChatGPT whatsapp bot",
		]
	},
	education: [
		"BSc Computer Science (Hogeschool Leiden 2014-2019)",
		"General Media developer (ROC Leiden 2010-2014)",
	]
}


const depthColors = [
	"#F1D700",
	"#DA70D6",
	"#179FFF",
];

const App = () => {

	return (
		<div style={{ padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
			<JSONViewer data={jsonData} />
		</div>
	)
}

export default App;

const JSONViewerKey = ({ displayKey }) => {

	return (
		<>
			{`"${displayKey}": `}
		</>
	)
}

const JSONViewerData = ({ data, level = 0, hasNext = false }) => {

	const getDisplayType = (displayKey, displayData) => {

		if (Array.isArray(displayData)) {

			return (
				<>
					<JSONTreeTag
						type={JSONTreeTagSymbol.OpeningBracket}
						level={level}
					/>
					<JSONTreeValueWrapper>
						{displayData.map((d, index) => (
							<div key={index}>
								{Boolean(displayKey) && (
									<>
										<JSONTreeKey text={displayKey} />
										<JSONTreeColon />
									</>
								)}
								<JSONViewerData
									data={d}
									level={level + 1}
									hasNext={index !== displayData.length - 1}
								/>
							</div>
						))}
					</JSONTreeValueWrapper>
					<JSONTreeTag
						type={JSONTreeTagSymbol.ClosingBracket}
						level={level}
					/>
					{hasNext && (
						<JSONTreeComma />
					)}
					<br />
				</>
			)
		}

		if (typeof displayData === "object") {

			return (
				<>
					<JSONTreeTag
						type={JSONTreeTagSymbol.OpeningBrace}
						level={level}
					/>
					<JSONTreeValueWrapper>
						{Object.keys(displayData).map((key, index) => (
							<Fragment key={key}>
								{Boolean(key) && (
									<>
										<JSONTreeKey text={key} />
										<JSONTreeColon />
									</>
								)}
								<JSONViewerData
									data={displayData[key]}
									level={level + 1}
									hasNext={index !== Object.keys(displayData).length - 1}
								/>
							</Fragment>
						))}
					</JSONTreeValueWrapper>
					<JSONTreeTag
						type={JSONTreeTagSymbol.ClosingBrace}
						level={level}
					/>
					{hasNext && (
						<JSONTreeComma />
					)}
					<br />
				</>
			)
		}

		if (typeof displayData === "string") {

			return (
				<Fragment>
					{Boolean(displayKey) && (
						<>
							<JSONTreeKey text={displayKey} />
							<JSONTreeColon />
						</>
					)}
					<JSONTreeText text={displayData} />
					{hasNext && (
						<JSONTreeComma />
					)}
					<br />
				</Fragment>
			)
		}

		if (typeof displayData === "number") {

			return (
				<Fragment>
					{Boolean(displayKey) && (
						<>
							<JSONTreeKey text={displayKey} />
							<JSONTreeColon />
						</>
					)}
					<JSONTreeNumber number={displayData} />
					{hasNext && (
						<JSONTreeComma />
					)}
					<br />
				</Fragment>
			)
		}

		if (typeof displayData === "boolean") {

			return (
				<Fragment>
					{Boolean(displayKey) && (
						<JSONViewerKey
							displayKey={displayKey}
						/>
					)}
					<JSONTreeBoolean boolean={displayData} />
					{hasNext && (
						<JSONTreeComma />
					)}
					<br />
				</Fragment>
			)
		}
	}

	return (
		<span>
			{getDisplayType("", data)}
		</span>
	)
}


const JSONViewer = ({ data }) => {

	return (
		<JSONViewerData
			data={data}
			level={0}
		/>
	)
}

enum JSONTreeTagSymbol {
	OpeningBracket = "[",
	ClosingBracket = "]",
	OpeningBrace = "{",
	ClosingBrace = "}",
	Colon = ":",
}

interface JSONTreeTagProps {
	type: JSONTreeTagSymbol;
	level: number;
}

const JSONTreeTag = ({ type, level }: JSONTreeTagProps) => (
	<span style={{ color: depthColors[level % depthColors.length] }}>{type}</span>
)

const JSONTreeColon = () => (
	<span style={{ color: '#fff'}}>: </span>
);

interface JSONTreeNumberProps {
	number: number;
}

const JSONTreeNumber = ({ number }: JSONTreeNumberProps) => (
	<span style={{ color: '#B5CEA8' }}>{number}</span>
)

interface JSONTreeStringProps {
	text: string;
}

const JSONTreeText = ({ text }: JSONTreeStringProps) => (
	<span style={{ color: '#CE9178' }}>"{text}"</span>
)

const JSONTreeComma = () => (
	<span style={{ color: '#fff'}}>,</span>
)

interface JSONTreeBooleanProps {
	boolean: boolean;
}

const JSONTreeBoolean = ({ boolean }: JSONTreeBooleanProps) => (
	<span style={{ color: '#569CD6' }}>{String(boolean)}</span>
)

interface JSONTreeKeyProps {
	text: string;
}

const JSONTreeKey = ({ text }: JSONTreeKeyProps) => (
	<span style={{ color: '#9CDCFE' }}>{`"${text}"`}</span>
)

interface JSONTreeValueWrapperProps {
	children: React.ReactNode;
}

const JSONTreeValueWrapper = ({ children }: JSONTreeValueWrapperProps) => (
	<div style={{
		lineHeight: 1.2,
		paddingLeft: 48,
	}}>
		{children}
	</div>
);

// JsonViewerData<Object>
// 	JsonViewerKey: JsonViewerData<String>
// 	JsonViewerKey: JsonViewerData<Number>
// 	JsonViewerKey: JsonViewerData<Array>
// 		JsonViewerKey: JsonViewerData<Object>
// 			JsonViewerKey: JsonViewerData<Array>
// 			JsonViewerKey: JsonViewerData<Number>
// 	JsonViewerKey: JsonViewerData<Boolean>


