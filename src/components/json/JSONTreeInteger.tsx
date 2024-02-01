import React from 'react';


interface JSONTreeIntegerProps {
	value: number;
}

const JSONTreeInteger = ({ value }: JSONTreeIntegerProps) => (
	<span style={{ color: '#B5CEA8' }}>
		{value}
	</span>
)


export default JSONTreeInteger;