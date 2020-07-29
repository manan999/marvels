import React, { Component } from 'react';

import CardList from '../Card/cardlist.js' ;

class PanelCard extends Component {
	render() {
		const {arr, big, path, info} = this.props ;
		return (
			<div>
				<div>
					<h3> {info} </h3>
					<CardList arr={arr} big={big} path={path}/> 
				</div> 
			</div>
		);
	}
}

export default PanelCard ;

