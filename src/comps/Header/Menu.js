import React, { Component } from 'react';

import './menu.css' ;

class Menu extends Component {
	render() {
		return (
			<div>
				<div className="burger" >
					<a className="item link" href='/'> Home </a>
					<a className="item link" href='/hero'> Heroes </a>
					<a className="item link" href='/villain'> Villains </a>
					<a className="item link" href='/team'> Teams </a>
					<a className="item link" href='/story'> Stories </a>
				</div>
			</div>
		);
	}
}

export default Menu ;
