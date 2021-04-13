import React from 'react';
import {Link} from'react-router-dom' ;

import './menu.css' ;

const MenuItems = [ ['Home', '/'], ['Heroes', '/hero'], ['Villains', '/villain'], ['Teams', '/team'], ['Stories', '/story'] ]

const Menu = ({closeCallback}) => {
	return (
		<div className="burger" onClick={closeCallback}>
			{ MenuItems.map((item,i) => <Link className="item link" to={item[1]}>{item[0]}</Link>)}
		</div>
	);
}

export default Menu ;
