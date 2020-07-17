import React from 'react' ;
import {Link} from'react-router-dom' ;
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

import './header.css' ;
import Menu from './Menu.js' ;

class Header extends React.Component 
{	
	state = {
      menuOpen: false,
    }	;

	classMenu = {
    	home : 'item link' ,
    	hero : 'item link' ,
    	vill : 'item link' ,
    	team : 'item link' ,
    	story : 'item link'
    } ;

	openMenu = () => {
	    this.setState({ menuOpen: true })
	}

	closeMenu = () => {
		// console.log("trigger") ;
	    this.setState({ menuOpen: false })
	}

	checkMobile = () => {
		if(window.screen.availWidth > 600)
		{	return (
				<div className="mini-menu">
					<Link className={this.classMenu.home} to='/'> Home </Link>
					<Link className={this.classMenu.hero} to='/hero'> Heroes </Link>
					<Link className={this.classMenu.vill} to='/villain'> Villains </Link>
					<Link className={this.classMenu.team} to='/team'> Teams </Link>
					<Link className={this.classMenu.story} to='/story'> Stories </Link>
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

	addOk = (str) => {
		let str2 = 'item link' ;
		let str4 = ' ok' ;
		this.classMenu.hero = this.classMenu.team = this.classMenu.story = str2 ;
		this.classMenu.vill = this.classMenu.home = str2 ;
		switch(str)
		{
			case '/hero' : this.classMenu.hero += str4 ;
						   break ;
			case '/villain' : this.classMenu.vill += str4 ;
						   break ;
			case '/' : this.classMenu.home += str4 ;
						   break ;
			case '/team' : this.classMenu.team += str4 ;
						   break ;
			case '/story' : this.classMenu.story += str4 ;
						   break ;
			default : str4 = ' ok' ;
		}
	} 

	render = () => {
		this.addOk(window.location.pathname) ;
		return (
			<div className="header" id="bar"> 
				<Link to="/" className="item link" id="logo"> MARVEL </Link> 
				<div className = "header-right">
					{this.checkMobile()}
				</div>
			</div>
			) ;
	} 
}

export default Header ;
