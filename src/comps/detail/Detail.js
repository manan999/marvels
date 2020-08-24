import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import './details.css' ;
import List from '../List/List.js' ;
import Item from '../List/Item/Item.js' ;
import Circle from '../Circle/Circle.js' ;
import ClickInfo from '../ClickInfo/ClickInfo.js' ;
import CardList from '../Card/cardlist.js' ;
import BreadCrumb from '../BreadCrumb/BreadCrumb.js' ;

class Detail extends Component {
	crumbData = [] ;
	state = {
		type : '' ,
		name : '' ,
		data : {} ,
		teamData : [] ,
		storyData : {} ,
	}	;

	componentDidMount = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] }, () => {
			this.crumbData = [
			{	name: 'Home >' ,
				link: '/'
			} ,	{
				name: this.state.type + ' >' ,
				link: '/' + this.state.type 
			} ,	{
				name: this.checkNum(this.state.name) ,
				link: '/' + this.state.type + '/' + this.state.name
			} ] ;
			this.getCharData() ;
		} );
	}

	checkNum = (str) =>{
		if( isNaN(str.charAt(str.length-1)) === false)
			return str.slice(0, str.length-2) ;
		else
			return str ;
	}

	getCharData = () => {
		let char = 'v' ;
		if(this.state.type === 'hero')	
			char = 'h' ; 
		else
			char = 'v' ;

		fetch('https://mrvl2-api.herokuapp.com/big'+char+'?name=' + this.state.name)
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({data: resp}, () => this.fetchMoreData()) )
	    .catch( err => console.log(err) ) ;
	}

	fetchMoreData = () => {
		fetch('https://mrvl2-api.herokuapp.com/memt?name=' + this.state.data.name)
		.then( res => {
			    if ( res.ok )
	              return res.json() ;
	            else 
	              throw Error(res.statusText)
	          } )
	    .then( resp => this.setState({teamData: resp}) )
	    .catch( err => console.log(err) ) ;

	    //Fetch story end-point here
	}

	render() {
		let {name, realname, biglink, combt, country, first, gender} = this.state.data ;
		let {intel, magic, origin, speed, stren, universe, tough, bio} = this.state.data ;
		let items = [realname, gender, universe, origin, country] ;
		let titles = ['Real Name:', 'Gender:', 'Universe:', 'Species:', 'Nationality:'] ;
		
		if( name )
		{
			return (
				<div>
					<div className="panel">
						<BreadCrumb data={this.crumbData}/>
						<hr color="#E70013" />
						<h1 className="heading focus-in-expand"> {this.checkNum(name)} </h1> 
						<hr color="#E70013" className="rule"/>
						<div className="bio">
							<p dangerouslySetInnerHTML={{ __html: bio }} />
						</div>
						<div className="img-long-con"> 
							<div className="img-long fade-in">
								<img src={biglink} alt={name}/>
							</div>
							<div className="content" >
								<List titles={titles} items={items}/>
								<Item title="First Appearance: " value={first} className="out-list"/>
							</div>
						</div>
						<div className="circle-con">  
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
