import React from 'react';

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

export default JSONTreeValueWrapper;