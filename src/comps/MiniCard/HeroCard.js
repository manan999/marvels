import React, { Component } from 'react';

// import './herocard.css' ;
import CardList from '../Card/cardlist.js' ;

class HeroCard extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> A List of the Earth's Mightiest Heroes and Beyond too...
					</h3>
					<CardList arr={this.props.hero} /> 
				</div> 
			</div>
		);
	}
}

export default HeroCard ;

