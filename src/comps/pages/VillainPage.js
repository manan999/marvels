import React, { Component } from 'react';

import ConSearch from '../ConSearch/ConSearch.js' ;

class VillainPage extends Component {
	render() {
		return (
			<div>
				<ConSearch title="VILLAINS" url="https://mrvl2-api.herokuapp.com/vill" />
			</div>
		);
	}
}

export default VillainPage ;