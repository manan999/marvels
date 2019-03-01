import React, { Component } from 'react';

import Searchbar from '../Search/Search.js' ;
import Logo from '../Logo/Logo.js' ;
import CardList from '../Card/cardlist.js' ;

class ConSearch extends Component {
	constructor()
	{
		super() ;
		this.state = {
			cards : [] ,
			searchText : '' ,
		}
	}

	componentDidMount() {
		fetch(this.props.url)
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            //console.log(resp) ;
	            this.setState({cards: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}

	onSC = (event) => {
		this.setState({searchText : event.target.value}) ;
		// console.log(event.target.value) ;
	}

	render() {
		// console.log(this.state.cards) ;
		const arr = this.state.cards.filter(card => {
			return card.name.toLowerCase().includes(this.state.searchText.toLowerCase()) ;
		}) ;

		return (
			<div className="panel">
				<Logo title={this.props.title} />
				<Searchbar searchChange={this.onSC} />
				<CardList arr={arr} big="yes" /> 
			</div>
		);
	}
}

export default ConSearch ;

