import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class StoryList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="STORIES" url="https://mrvl-api.herokuapp.com/story" />
			</div>
		);
	}
}

export default StoryList ;