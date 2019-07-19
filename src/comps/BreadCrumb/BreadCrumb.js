import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

import './BreadCrumb.css' ;

class BreadCrumb extends Component {
	createLinks = () => {
		return this.props.data.map( item => <Link to={item.link} key={item.name}>
											 {item.name} </Link> ) ;		
	}

	render() {
		return (
			<div className="crumb">
				{this.createLinks()}
			</div>
		);
	}
}

export default BreadCrumb ;
