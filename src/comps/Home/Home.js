import React, { Component } from 'react';

import './home.css' ;
import MiniCardList from '../MiniCard/MiniCardList.js' ;

class Home extends Component {
	render() {
		return (
			<div>
				<div className="panel">
					<h1 className="home"> Home </h1>
					<h2> Marvel + Us = Marvellous </h2>
					<hr color="red" />
					<MiniCardList />
				</div> 
			</div>
		);
	}
}

export default Home ;
