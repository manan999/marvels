import React, { Component } from 'react';
import {Link} from'react-router-dom' ;

import './mini.css' ;

class MiniCard extends Component {
	select()
	{	if(this.props.path !== '/gallery')
		{	return (
				<div className="next" >
					<Link className="heartbeat" to={this.props.path}> More </Link> 
				</div>
			) ;
		}
	}

	render() {
		return (
			<div className="mini">
				<h2> {this.props.head} </h2>
				<div> {this.props.children} </div>
				{this.select()}
			</div>
		);
	}
}

export default MiniCard ;
