import React from 'react';

import CardList from '../Card/cardlist.js' ;

const PanelCard = ({arr, big, path, info}) => {
	return (
		<div>
			<h3> {info} </h3>
			<CardList arr={arr} big={big} path={path}/> 
		</div>
	);
}

export default PanelCard ;

