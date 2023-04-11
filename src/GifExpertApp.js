import React, {useState} from 'react';
import {AddCategory} from './Components/AddCategory';
import {GifGrid} from './Components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One punch']);
	return (
		<>
			<h2 className="title">Búsqueda de gifs animados</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => {
					return <GifGrid key={category} category={category} />;
				})}
			</ol>
		</>
	);
};
