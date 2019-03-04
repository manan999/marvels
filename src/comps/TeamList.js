import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class TeamList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="Teams" url="http://magic-brain-api.herokuapp.com/team" />
			</div>
		);
	}
}

export default TeamList ;