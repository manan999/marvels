import React, { Component } from 'react';

import ConSearch from '../ConSearch/ConSearch.js' ;

class StoryPage extends Component {
	render() {
		return (
			<div>
				<ConSearch title="STORIES" url="https://mrvl2-api.herokuapp.com/story" />
			</div>
		);
	}
}

export default StoryPage ;