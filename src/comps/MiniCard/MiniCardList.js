import React, { Component } from 'react';

import ImageSlide from './ImageSlide.js' ;
import MiniCard from './MiniCard.js' ;
import HeroCard from './HeroCard.js' ;
import VillainCard from './VillainCard.js' ;
import TeamCard from './TeamCard.js' ;
import StoryCard from './StoryCard.js' ;

class MiniCardList extends Component {
	constructor(props) 
	{	super(props) ;
		this.state = {
			hero : [] ,
			villain : [] ,
		}
	}

	componentDidMount() {
		fetch('http://magic-brain-api.herokuapp.com/avenger')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            // console.log(resp) ;
	            this.setState({hero: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	    fetch('http://magic-brain-api.herokuapp.com')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            // console.log(resp) ;
	            this.setState({villain: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}

	render() {
		//console.log(this.state) ;
		return (
			<div>
				<MiniCard head="WELCOME!" path='/gallery'>
					<ImageSlide />
				</MiniCard>
				<MiniCard head="HEROES!" path='/hero'>
					<HeroCard hero={this.state.hero.slice(1, 5)}/>
				</MiniCard>
				<MiniCard head="VILLAINS!" path='/villain'>
					<VillainCard vill={this.state.hero.slice(5, 9)}/>
				</MiniCard>
				<MiniCard head="STORIES!" path='/story'>
					<StoryCard story={this.state.hero.slice(9, 13)}/>
				</MiniCard>
				<MiniCard head="TEAMS!" path='/team'>
					<TeamCard team={this.state.hero.slice(13, 17)} />
				</MiniCard>
			</div>
		);
	}
}

export default MiniCardList ;

