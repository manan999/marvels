import React, { Component } from 'react';

class BigDetail extends Component {
	constructor()
	{
		super()
		this.state = {
			type : '' ,
			name : '' ,
		}
	}

	format = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] });
	}

	componentDidMount = () => {
		this.format() ;
	}

	render() {
		return (
			<div>
				<div className="panel">
					This is Detail Page for {this.state.type + ' ' + this.state.name}
				</div>
			</div>
		);
	}
}

export default BigDetail ; 
