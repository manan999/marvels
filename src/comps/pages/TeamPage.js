import React, { Component } from 'react';

import ConSearch from '../ConSearch/ConSearch.js' ;

class TeamPage extends Component {
	render() {
		return (
			<div>
				<ConSearch title="Teams" url="https://mrvl2-api.herokuapp.com/team" />
			</div>
		);
	}
}

export default TeamPage ;