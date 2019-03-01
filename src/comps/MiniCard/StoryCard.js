import React, { Component } from 'react';

// import './Storycard.css' ;
import CardList from '../Card/cardlist.js' ;

class StoryCard extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> From Infinity to Annihilation, Some of the greatest of the Marvel Lore...
					</h3>
					<CardList arr={this.props.story} big="no"/> 
				</div> 
			</div>
		);
	}
}

export default StoryCard ;