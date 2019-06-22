import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class TeamList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="Teams" url="https://mrvl-api.herokuapp.com/team" />
			</div>
		);
	}
}

export default TeamList ;