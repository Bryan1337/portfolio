import { Tooltip, TooltipProps } from '@mui/material';
import React from 'react';


const AppTooltip = ({ ...props }: TooltipProps) => {
	return (
		<Tooltip
			{...props}
			classes={{
				tooltip: "app-tooltip",
				arrow: "app-tooltip-arrow",
			}}
		/>
	);
};



export default AppTooltip;