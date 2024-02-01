import React from 'react';

interface JSONTreeTextProps {
	value: string;
}

const JSONTreeText = ({ value }: JSONTreeTextProps) => (
	<span style={{ color: '#CE9178' }}>
		"{value}"
	</span>
)

export default JSONTreeText;