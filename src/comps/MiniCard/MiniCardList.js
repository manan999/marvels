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
			story : [] ,
			team : [] ,
		}
	}

	componentDidMount() {
		fetch('http://magic-brain-api.herokuapp.com/hero')
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
	    fetch('http://magic-brain-api.herokuapp.com/vill')
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
	    fetch('http://magic-brain-api.herokuapp.com/team')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            // console.log(resp) ;
	            this.setState({team: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	    fetch('http://magic-brain-api.herokuapp.com/story')
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            // console.log(resp) ;
	            this.setState({story: resp});
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
					<HeroCard hero={this.state.hero.slice(0, 4)}/>
				</MiniCard>
				<MiniCard head="VILLAINS!" path='/villain'>
					<VillainCard vill={this.state.villain.slice(0, 4)}/>
				</MiniCard>
				<MiniCard head="STORIES!" path='/story'>
					<StoryCard story={this.state.story.slice(0, 4)}/>
				</MiniCard>
				<MiniCard head="TEAMS!" path='/team'>
					<TeamCard team={this.state.team.slice(0, 4)} />
				</MiniCard>
			</div>
		);
	}
}

export default MiniCardList ;

