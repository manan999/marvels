import React, { Component } from 'react';

// import './Teamcard.css' ;
import CardList from '../Card/cardlist.js' ;

class TeamCard extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> When the threats are too mighty to tackle alone, you ASSEMBLE...
					</h3>
					<CardList arr={this.props.team} />  
				</div> 
			</div>
		);
	}
}

export default TeamCard ;
