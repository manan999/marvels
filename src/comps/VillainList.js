import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class VillainList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="VILLAINS" url="https://mrvl-api.herokuapp.com/vill" />
			</div>
		);
	}
}

export default VillainList ;
