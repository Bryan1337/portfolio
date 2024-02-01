import React from "react";

interface JSONTreeKeyProps {
	value: string;
}

const JSONTreeKey = ({ value }: JSONTreeKeyProps) => (
	<span style={{ color: '#9CDCFE' }}>
		"{value}"
	</span>
)

export default JSONTreeKey;