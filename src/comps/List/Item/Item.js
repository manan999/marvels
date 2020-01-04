import React, { Component } from 'react';

class Item extends Component {
	render() {
		return (
			<div className="litem">
				<div id="l"> <p> {this.props.title} </p> </div>
				<div id="r"> <p> {this.props.value} </p> </div>
			</div>
		);
	}
}

export default Item ;