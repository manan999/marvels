import React, { Component } from 'react';

import './home.css' ;
import ImageSlide from '../ImageSlide.js' ;
import MiniCard from '../MiniCard/MiniCard.js' ;
import HeroCard from '../HeroCard.js' ;
import VillainCard from '../VillainCard.js' ;
import TeamCard from '../TeamCard.js' ;
import StoryCard from '../StoryCard.js' ;

class Home extends Component {
	render() {
		return (
			<div>
				<div className="panel">
					<h1> Home </h1>
					<h2> Marvel + Us = Marvellous </h2>
					<hr color="red" />
					<MiniCard head="WELCOME!">
						<ImageSlide />
					</MiniCard>
					<MiniCard head="HEROES!">
						<HeroCard />
					</MiniCard>
					<MiniCard head="VILLAINS!">
						<VillainCard />
					</MiniCard>
					<MiniCard head="STORIES!">
						<StoryCard />
					</MiniCard>
					<MiniCard head="TEAMS!">
						<TeamCard />
					</MiniCard>
				</div> 
			</div>
		);
	}
}

export default Home ;
