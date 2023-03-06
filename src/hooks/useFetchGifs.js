import {useEffect, useState} from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
	const [stateInitial, setStateInitial] = useState({
		loading: true,
		data: [],
	});

	useEffect(() => {
		getGifs(category).then((imgs) =>
			setTimeout(() => {
				setStateInitial({
					loading: false,
					data: imgs,
				});
			}, 1500)
		);
	}, [category]);

	return stateInitial;
};
