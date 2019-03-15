import React, { Component } from 'react';

class Item extends Component {
	render() {
		return (
			<div className="litem">
				<div id="l"> {this.props.title} </div>
				<div id="r" className={this.props.up}> {this.props.value} </div>
			</div>
		);
	}
}

export default Item ;