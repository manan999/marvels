import React from 'react' ;
import {Link} from'react-router-dom' ;
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import './header.css' ;
import Menu from './Menu.js' ;

const headerItems = [ ['/', 'Home'], ['/hero', 'Heroes'], ['/villain', 'Villains'], ['/team', 'Teams'], ['/story', 'Stories'] ] ;

const checkLocation = (str) => {
	if(str === window.location.pathname)
		return 'item link ok' ;
	else
		return 'item link' ;
} 

class Header extends React.Component 
{	
	state = {
      menuOpen: false,
    }	;

	openMenu = () => {
	    this.setState({ menuOpen: true })
	}

	closeMenu = () => {
	    this.setState({ menuOpen: false })
	}

	checkMobile = () => {
		if(window.screen.availWidth > 600)
		{	return (
				<div className="mini-menu">
					{ headerItems.map(item => <Link className={() => checkLocation(item[0])} 
													to={item[0]}> {item[1]} </Link>) 
					}
				</div>
				) ;
		}
		else
		{
			return (
				<div>
					<CheeseburgerMenu isOpen={this.state.menuOpen} closeCallback={this.closeMenu}>
							<Menu closeCallback={this.closeMenu}/>
					</CheeseburgerMenu>
					<HamburgerMenu isOpen={this.state.menuOpen} menuClicked={this.openMenu} 
								   width={32} height={24} strokeWidth={8} color='white' 
								   borderRadius={1} animationDuration={0.5} />
				</div>
				) ;
		}
	}

	render = () => {
		return (
			<div className="ui secondary pointing menu" id="bar">
				<Link to="/" className="item link" id="logo"> MARVEL </Link> 
				<div className = "ui right secondary menu">
					{this.checkMobile()}
				</div>
			</div>
			) ;
	} 
}

export default Header ;
