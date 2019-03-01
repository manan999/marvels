import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class VillainList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="VILLAINS" url="http://magic-brain-api.herokuapp.com/avenger" />
			</div>
		);
	}
}

export default VillainList ;
