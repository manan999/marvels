import React from 'react' ;
import {Link} from'react-router-dom' ;
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'


import './header.css' ;
import Menu from './Menu.js' ;

class Header extends React.Component 
{
	constructor(props) {
	    super(props)

	    this.state = {
	      menuOpen: false,
	    }
	}

	openMenu = () => {
	    this.setState({ menuOpen: true })
	}

	closeMenu = () => {
		console.log("trigger") ;
	    this.setState({ menuOpen: false })
	}

	checkMobile = () => {
		if(window.screen.availWidth > 600)
		{	return (
				<div className="mini-menu">
					<Link className="item link" to='/'> Home </Link>
					<Link className="item link" to='/hero'> Heroes </Link>
					<Link className="item link" to='/villain'> Villains </Link>
					<Link className="item link" to='/team'> Teams </Link>
					<Link className="item link" to='/story'> Stories </Link>
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
