import React, { Component } from 'react';

import ConSearch from './ConSearch/ConSearch.js' ;

class HeroList extends Component {
	render() {
		return (
			<div>
				<ConSearch title="HEROES" url="http://mrvl-api.herokuapp.com/hero" />
			</div>
		);
	}
}

export default HeroList ;
