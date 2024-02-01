import React from 'react';

export enum JSONTreeTagSymbol {
	OpeningBracket = "[",
	ClosingBracket = "]",
	OpeningBrace = "{",
	ClosingBrace = "}",
}

interface JSONTreeTagProps {
	type: JSONTreeTagSymbol;
	level: number;
}

const depthColors = [
	"#F1D700",
	"#DA70D6",
	"#179FFF",
];

const JSONTreeTag = ({ type, level }: JSONTreeTagProps) => (
	<span style={{ color: depthColors[level % depthColors.length] }}>{type}</span>
)

export default JSONTreeTag;