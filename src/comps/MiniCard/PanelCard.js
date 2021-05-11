import React from 'react';

import CardList from '../Card/cardlist.js' ;

const PanelCard = ({arr, big, humaraPath, info}) => {
	return (
		<div>
			<h3> {info} </h3>
			<CardList arr={arr} big={big} humaraPath={humaraPath}/> 
		</div>
	);
}

export default PanelCard ;

