import React from 'react';

interface JSONTreeLinkProps {
	value: string;
}

const JSONTreeLink = ({ value }: JSONTreeLinkProps) => (
	<span style={{ color: "#569CD6"  }}>
		"<a
			style={{ textDecoration: 'underline', color: "#569CD6" }}
			target='_blank'
			href={value}>{value}
		</a>"
	</span>
)

export default JSONTreeLink;