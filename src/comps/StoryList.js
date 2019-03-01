import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class StoryList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="STORIES" url="http://magic-brain-api.herokuapp.com/avenger" />
			</div>
		);
	}
}

export default StoryList ;