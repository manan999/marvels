import React, { useState, useEffect } from 'react';

import ImageSlide from './ImageSlide.js' ;
import MiniCard from './MiniCard.js' ;
import PanelCard from './PanelCard.js' ;

const MiniCardList = () => {
	const [hero, setHero] = useState([]) ;
	const [villain, setVillain] = useState([]) ;
	const [team, setTeam] = useState([]) ;
	const [story, setStory] = useState([]) ;

	let x = ((window.screen.availWidth < 600 && window.screen.availWidth > 325 ) ? 6 : 4 ) ;
	
	useEffect( () => {
		fetch('https://mrvl2-api.herokuapp.com/hero?limit=6')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => setHero(resp) )
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/vill?limit=6')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => setVillain(resp) )
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/team?limit=4')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => setTeam(resp) )
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/story?limit=4')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => setStory(resp) )
	    .catch( err => console.log(err) ) ;
	}, []) ;

	return (
		<div>
			<MiniCard head="WELCOME!" humaraPath='/gallery'>
				<ImageSlide />
			</MiniCard>
			<MiniCard head="HEROES!" humaraPath='/hero'>
				<PanelCard arr={hero.slice(0, x)} big="no" humaraPath="hero/" info="A List of the Earth's Mightiest Heroes and Beyond too..."/>
			</MiniCard>
			<MiniCard head="VILLAINS!" humaraPath='/villain'>
				<PanelCard arr={villain.slice(0, x)} big="no" humaraPath="villain/" info="The Dreadful, the Deadly and the Fearsome of Marvel Universe ..."/>
			</MiniCard>
			<MiniCard head="STORIES!" humaraPath='/story'>
				<PanelCard arr={story.slice(0, 4)} big="med" humaraPath="story/" info="From The Infinity Saga to Annihilation, Some of the greatest of the Marvel Lore..."/>
			</MiniCard>
			<MiniCard head="TEAMS!" humaraPath='/team'>
				<PanelCard arr={team.slice(0, 4)} big="med" humaraPath="team/" info="When the threats are too mighty to tackle alone, you ASSEMBLE..."/>
			</MiniCard>
		</div>
	);
}

export default MiniCardList ;

