import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class TeamList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="TeamS" url="http://magic-brain-api.herokuapp.com/hero" />
			</div>
		);
	}
}

export default TeamList ;