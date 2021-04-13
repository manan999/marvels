import React, {useState, useEffect} from 'react';

import Searchbar from '../Search/Search.js' ;
import CardList from '../Card/cardlist.js' ;

import './logo.css' ;

const Logo = ({title}) => {
	return (
		<div className="logo">
			<h1> {title} </h1>
		</div>
	);
}

const calcPath = (title) => {
	switch(title)
	{
		case 'HEROES' : return 'hero/' ;
		case 'VILLAINS' : return 'villain/' ;
		case 'STORIES' : return 'story/' ;
		case 'Teams' : return 'team/' ;
		default : return '' ;
	}
}


const ConSearch = ({url, title}) => {
	const [cards, setCards] = useState([]) ;
	const [searchText, setSearchText] = useState('') ;

	const arr = cards.filter(card => card.name.toLowerCase().includes(searchText.toLowerCase()) ) ;

	let str = (title === 'HEROES'||title === 'VILLAINS')?'yes':'med';

	useEffect(() => {
		fetch(url)
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => setCards(resp) )
	    .catch( err => console.log(err) ) ;
	}, [url]) ;

	const onSC = (event) => {
		setSearchText(event.target.value) ;
	}

	return (
		<div className="panel">
			<Logo title={title} />
			<Searchbar searchChange={onSC} />
			<CardList arr={arr} big={str} path={() => calcPath(title)}/> 
		</div>
	);
}

export default ConSearch ;

