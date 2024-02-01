import React from 'react';

interface JSONTreeBooleanProps {
	value: boolean;
}

const JSONTreeBoolean = ({ value }: JSONTreeBooleanProps) => (
	<span style={{ color: '#569CD6' }}>
		{String(value)}
	</span>
)


export default JSONTreeBoolean;