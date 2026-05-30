import React from 'react';

interface JSONTreeValueWrapperProps {
	children: React.ReactNode;
}

const JSONTreeValueWrapper = ({ children }: JSONTreeValueWrapperProps) => (
	<div
		style={{
			lineHeight: 1.2,
			paddingLeft: 48,
			borderLeft: '2px solid #2D2D2D',
		}}>
		{children}
	</div>
)

export default JSONTreeValueWrapper;