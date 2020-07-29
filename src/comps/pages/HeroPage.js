import React, { Component } from 'react';

import ConSearch from '../ConSearch/ConSearch.js' ;

class HeroPage extends Component {
	render() {
		return (
			<div>
				<ConSearch title="HEROES" url="https://mrvl2-api.herokuapp.com/hero" />
			</div>
		);
	}
}

export default HeroPage ;