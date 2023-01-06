import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const WindowSize = () => {
	const size = useWindowSize();

	return (
		<div>
			{size.width}px / {size.height}px
		</div>
	);
};

export default WindowSize;