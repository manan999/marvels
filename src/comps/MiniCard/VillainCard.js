import React, { Component } from 'react';

// import './Villaincard.css' ;
import CardList from '../Card/cardlist.js' ;

class VillainCard extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> The Dreadful, the deadly and the fearsome of Marvel Universe ...
					</h3>
					<CardList arr={this.props.vill} big="no"/>
				</div> 
			</div>
		);
	}
}

export default VillainCard ;
