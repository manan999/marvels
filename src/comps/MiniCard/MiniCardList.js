import React, { Component } from 'react';

import ImageSlide from './ImageSlide.js' ;
import MiniCard from './MiniCard.js' ;
import PanelCard from './PanelCard.js' ;

class MiniCardList extends Component {
	state = {
			hero : [] ,
			villain : [] ,
			story : [] ,
			team : [] ,
	}	;

	componentDidMount() {
		fetch('https://mrvl2-api.herokuapp.com/hero?limit=7')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({hero: resp})	)
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/vill?limit=7')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({villain: resp}) )
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/team?limit=5')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({team: resp})	)
	    .catch( err => console.log(err) ) ;

	    fetch('https://mrvl2-api.herokuapp.com/story?limit=5')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({story: resp})	)
	    .catch( err => console.log(err) ) ;
	}

	render() {
		let x = ((window.screen.availWidth < 600 && window.screen.availWidth > 325 ) ? 6 : 4 ) ;
		return (
			<div>
				<MiniCard head="WELCOME!" path='/gallery'>
					<ImageSlide />
				</MiniCard>
				<MiniCard head="HEROES!" path='/hero'>
					<PanelCard arr={this.state.hero.slice(0, x)} big="no" path="hero/" info="A List of the Earth's Mightiest Heroes and Beyond too..."/>
				</MiniCard>
				<MiniCard head="VILLAINS!" path='/villain'>
					<PanelCard arr={this.state.villain.slice(0, x)} big="no" path="villain/" info="The Dreadful, the Deadly and the Fearsome of Marvel Universe ..."/>
				</MiniCard>
				<MiniCard head="STORIES!" path='/story'>
					<PanelCard arr={this.state.story.slice(0, x)} big="med" path="story/" info="From The Infinity Saga to Annihilation, Some of the greatest of the Marvel Lore..."/>
				</MiniCard>
				<MiniCard head="TEAMS!" path='/team'>
					<PanelCard arr={this.state.team.slice(0, x)} big="med" path="team/" info="When the threats are too mighty to tackle alone, you ASSEMBLE..."/>
				</MiniCard>
			</div>
		);
	}
}

export default MiniCardList ;

