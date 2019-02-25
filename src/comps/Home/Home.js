import React, { Component } from 'react';

import './home.css' ;
import ImageSlide from '../ImageSlide.js' ;
import MiniCard from '../MiniCard/MiniCard.js' ;

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
					<MiniCard head="WELCOME!">
						<ImageSlide />
					</MiniCard>
				</div> 
			</div>
		);
	}
}

export default Home ;
