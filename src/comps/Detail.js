import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import './details.css' ;
import List from './List/List.js' ;
import Item from './List/Item/Item.js' ;
import Circle from './Circle/Circle.js' ;
import ClickInfo from './ClickInfo/ClickInfo.js' ;
import CardList from './Card/cardlist.js' ;
import BreadCrumb from './BreadCrumb/BreadCrumb.js' ;

class Detail extends Component {
	constructor()
	{
		super() ;
		this.crumbData = [] ;
		this.state = {
			type : '' ,
			name : '' ,
			data : {} ,
			teamData : {} ,
		}
	}

	componentDidMount = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] }, () => {
			this.crumbData = [
			{
				name: 'Home >' ,
				link: '/'
			} ,
			{
				name: this.state.type + ' >' ,
				link: '/' + this.state.type 
			} ,
			{
				name: this.state.name ,
				link: '/' + this.state.type + '/' + this.state.name 
			} 
			] ;
			this.getCharData() ;
		} );
	}

	getCharData = () => {
		if(this.state.type === 'hero')
		{
			fetch('https://mrvl-api.herokuapp.com/bigh?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => {
		            // console.log(resp) ;
		            this.setState({data: resp[0]}, () => this.fetchMoreHeroData('h') );
		                	} )
		    .catch( err => console.log(err) ) ;
		}
		else
		{
			fetch('https://mrvl-api.herokuapp.com/bigv?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => {
		            // console.log(resp) ;
		            this.setState({data: resp[0]}, () => this.fetchMoreHeroData('v'));
		                	} )
		    .catch( err => console.log(err) ) ;
		}		
	}

	fetchMoreHeroData = (ch) => {
		fetch('https://mrvl-api.herokuapp.com/tsp' + ch + '?ch=' + this.state.data.id)
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => {
	            //console.log(resp) ;
	            this.setState({teamData: resp});
	                	} )
	    .catch( err => console.log(err) ) ;
	}

	render() {
		let {name, realname, biglink, combt, country, first, gender} = this.state.data ;
		let {intel, magic, origin, speed, stren, universe, tough} = this.state.data ;
		let items = [realname, gender, universe, origin, country] ;
		let titles = ['Real Name:', 'Gender:', 'Universe:', 'Species:', 'Nationality:'] ;
		if( this.state.data.hasOwnProperty('name') )
		{
			return (
				<div>
					<div className="panel">
						<BreadCrumb data={this.crumbData}/>
						<hr color="#E70013" />
						<h1 className="heading focus-in-expand"> {name} </h1> 
						<hr color="#E70013" className="rule"/>
						<div className="bio">
							<p dangerouslySetInnerHTML={{ __html: this.state.data.bio }} />
						</div>
						<div> 
							<div className="img-long fade-in">
								<img src={biglink} alt={name}/>
							</div>
							<div className="content" >
								<List titles={titles} items={items}/>
								<Item title="First Appearance: " value={first} className="out-list"/>
							</div>
						</div>
						<div>  
						    <Circle num={intel} text="Intelligence" />
						    <Circle num={combt} text="Combat" />
						    <Circle num={stren} text="Strength" />
						    <Circle num={speed} text="Speed" />
						    <Circle num={tough} text="Toughness" />
						    <Circle num={magic} text="Magical" />
						</div>
						<ClickInfo title="Teams">
							<CardList arr={this.state.teamData} big="med" path="team/" />
						</ClickInfo>
						<ClickInfo title="Stories">
							<p> Coming Soon... </p>
						</ClickInfo>
					</div>
				</div>
			);
		}
		else
		{	let size = ((window.screen.availWidth < 600 ) ? 150 : 350 ) ;
			return (
				<div>
					<div className="panel">
						<div className="loader">
							<CircleLoader sizeUnit={"px"} size={size} color={'#e70013'} loading={true}/>
						</div>
						<h2 className="load-text"> Loading ... </h2>
					</div>  
				</div>
			) ;
		}
	}
}

export default Detail ; 
