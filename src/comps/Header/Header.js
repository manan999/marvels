import React, {useState} from 'react' ;
import {Link} from'react-router-dom' ;
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import './header.css' ;
import Menu from './Menu.js' ;

const headerItems = [ ['/', 'Home'], ['/hero', 'Heroes'], ['/villain', 'Villains'], ['/team', 'Teams'], ['/story', 'Stories'] ] ;

const Header = () => {	
	const [menuOpen, setMenuOpen] = useState(false) ;

	const checkMobile = () => {
		if(window.screen.availWidth > 600)
		{	return (
				<div className="mini-menu">
					{ headerItems.map((item,i) => <Link key={i} to={item[0]} className={(window.location.pathname===item[0]?'item link ok':'item link')} > {item[1]} </Link>) 
					}
				</div>
			) ;
		}
		else
		{
			return (
				<div>
					<CheeseburgerMenu isOpen={menuOpen} closeCallback={() => setMenuOpen(false)}>
							<Menu closeCallback={() => setMenuOpen(false)}/>
					</CheeseburgerMenu>
					<HamburgerMenu isOpen={menuOpen} menuClicked={() => setMenuOpen(true)} width={32} height={24} strokeWidth={8} color='white' borderRadius={1} animationDuration={0.5} />
				</div>
			) ;
		}
	}

	return (
		<div className="ui secondary pointing menu" id="bar">
			<Link to="/" className="item link" id="logo"> MARVEL </Link> 
			<div className = "ui right secondary menu">
				{checkMobile()}
			</div>
		</div>
	) ;
}

export default Header ;
