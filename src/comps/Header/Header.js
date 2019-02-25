import React from 'react' ;
import {Link} from'react-router-dom' ;

import './header.css' ;

const Header = () => {
	return (
		<div className="ui secondary pointing menu" id="bar"> 
			<Link to="/" className="item link" id="logo"> MARVEL </Link> 
			<div className = "ui right secondary menu">
				<Link className="item link" to='/'> Home </Link>
				<Link className="item link" to='/heroes'> Heroes </Link>
				<Link className="item link" to='/villains'> Villains </Link>
				<Link className="item link" to='/teams'> Teams </Link>
				<Link className="item link" to='/stories'> Stories </Link>
			</div>
		</div>
		) ; 
}

export default Header ;