import React, { Component } from 'react';

import './mini.css' ;

class MiniCard extends Component {
	render() {
		return (
			<div className="mini">
				<h2> {this.props.head} </h2>
				<div> {this.props.children} </div>
			</div>
		);
	}
}

export default MiniCard ;
