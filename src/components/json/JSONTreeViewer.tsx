import React, { Fragment } from 'react';
import JSONTreeBoolean from './JSONTreeBoolean';
import JSONTreeColonSymbol from './JSONTreeColonSymbol';
import JSONTreeComma from './JSONTreeComma';
import JSONTreeInteger from './JSONTreeInteger';
import JSONTreeKey from './JSONTreeKey';
import JSONTreeLink from './JSONTreeLink';
import JSONTreeTag, { JSONTreeTagSymbol } from './JSONTreeTag';
import JSONTreeText from './JSONTreeText';
import JSONTreeValueWrapper from './JSONTreeValueWrapper';

interface JSONDataObject {
	[key: string]: JSONData;
}

type JSONData = string | number | boolean | JSONDataObject | JSONData[];

interface JSONViewerDataProps {
	data: JSONData;
	level?: number;
	hasNext?: boolean;
}

const JSONTreeViewer = ({
	data,
	level = 0,
	hasNext = false
}: JSONViewerDataProps) => {

	const getJSONDisplayType = (displayKey: string, displayData: JSONData) => {

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
										<JSONTreeKey value={displayKey} />
										<JSONTreeColonSymbol />
									</>
								)}
								<JSONTreeViewer
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
										<JSONTreeKey value={key} />
										<JSONTreeColonSymbol />
									</>
								)}
								<JSONTreeViewer
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
							<JSONTreeKey value={displayKey} />
							<JSONTreeColonSymbol />
						</>
					)}
					{displayData.startsWith('http') ? (
						<JSONTreeLink value={displayData} />
					) : (
						<JSONTreeText value={displayData} />
					)}
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
						<Fragment>
							<JSONTreeKey value={displayKey} />
							<JSONTreeColonSymbol />
						</Fragment>
					)}
					<JSONTreeInteger value={displayData} />
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
						<Fragment>
							<JSONTreeKey value={displayKey} />
							<JSONTreeColonSymbol />
						</Fragment>
					)}
					<JSONTreeBoolean value={displayData} />
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
			{getJSONDisplayType("", data)}
		</span>
	)
}
export default JSONTreeViewer;