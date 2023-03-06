import React from 'react';

export const GifGridItem = ({url, title}) => {
	return (
		<div className="card animate__animated animate__backInLeft">
			<h4 className="card-title">{title}</h4>
			<img className="card-image" src={url} alt={title} />
		</div>
	);
};
