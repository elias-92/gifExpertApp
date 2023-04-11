import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
	const {data: images, loading} = useFetchGifs(category);

	return (
		<>
			<h3 className='category-title'>{category}</h3>
			{loading && <div className='spinner'></div>}
			<div className="card-container">
				{images.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
