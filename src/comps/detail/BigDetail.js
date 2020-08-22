import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import CardList from '../Card/cardlist.js' ;
import BreadCrumb from '../BreadCrumb/BreadCrumb.js' ;
import ClickInfo from '../ClickInfo/ClickInfo.js' ;
import StorySlider from '../slider/storyslider/StorySlider.js' ;
import './details.css' ;

class BigDetail extends Component {
	
	crumbData = [] ;
	state = {
		type : '' ,
		name : '' ,
		dataH : [] ,
		dataV : [] ,
		genData : {} ,
	} ;

	getTeamStoryData = () => {
		if(this.state.type === 'team')
		{	fetch('https://mrvl2-api.herokuapp.com/team?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => this.setState({ genData : resp}) )
		    .catch( err => console.log(err) ) ;

			fetch('https://mrvl2-api.herokuapp.com/tmem?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => this.setState({dataH: resp[0], dataV: resp[1]})	)
		    .catch( err => console.log(err) ) ;
		}
		else if(this.state.type === 'story')
		{	fetch('https://mrvl2-api.herokuapp.com/story?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => { console.log(resp); this.setState({ genData : resp}) ; } )
		    .catch( err => console.log(err) ) ;
		}
		else
			console.log(this.state.type, this.state.name) ;
	}

	componentDidMount = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] }, () =>{
			this.crumbData = [
			{	name: 'Home >' ,
				link: '/'
			} ,	{
				name: this.state.type + ' >' ,
				link: '/' + this.state.type 
			} ,	{
				name: this.state.name ,
				link: '/' + this.state.type + '/' + this.state.name 
			} 	] ;
			this.getTeamStoryData() ;
		}) ;
	}

	checkHeroLoaded = () => {
		if(this.state.dataH.hasOwnProperty('0') && this.state.genData.leader)
		{	const {leader, notable} = this.state.genData ;
			const hmem =  this.state.dataH.filter( item => notable.includes(item.name)) ;
			const hLeader =  this.state.dataH.filter( item => leader.includes(item.name)).concat(hmem) ;
			return <CardList arr={this.state.dataH.filter( ( el ) => !hLeader.includes( el ) )} 
							 big="yes" path="hero/" /> ;
		}
		else
			return <CardList arr={this.state.dataH} big="yes" path="hero/" /> ;	
	}

	checkVillLoaded = () => {
		if(this.state.dataV.hasOwnProperty('0') && this.state.genData.leader)
		{	const {leader, notable} = this.state.genData ;
			const vmem =  this.state.dataV.filter( item => notable.includes(item.name)) ;
			const vLeader =  this.state.dataV.filter( item => leader.includes(item.name)).concat(vmem) ;
			return <CardList arr={this.state.dataV.filter( ( el ) => !vLeader.includes( el ) )} 
							 big="yes" path="villain/" /> ;
		}
		else
			return <CardList arr={this.state.dataV} big="yes" path="villain/" /> ;
	}

	filterLeader = () => {
		if( this.state.genData.leader )
		{	const {leader} = this.state.genData ;
			const hLeader =  this.state.dataH.filter( item => leader.includes(item.name)) ;
			const vLeader =  this.state.dataV.filter( item => leader.includes(item.name)) ;
			return (
			<div className="leader-list">
				<CardList arr={hLeader} big="yes" path="hero/" /> 
				<CardList arr={vLeader} big="yes" path="villain/" /> 
			</div>
			) ;
			
		}
		else
			return null ;
	}

	filterMember = () => {
		const {notable} = this.state.genData ;
		if( notable )
		{	const hmem =  this.state.dataH.filter( item => notable.includes(item.name)) ;
			const vmem =  this.state.dataV.filter( item => notable.includes(item.name)) ;
			return (
			<div className="leader-list">
				<CardList arr={hmem} big="yes" path="hero/" /> 
				<CardList arr={vmem} big="yes" path="villain/" /> 
			</div>
			) ;
			
		}
		else
			return null ;
	}	

	checkParts = () => {
		const {parts, data} = this.state.genData ;
		if(parts)
		{	return parts.map( (part, i) => {
				if(parts[1]) {
					return (
						<ClickInfo title={"Story (Part "+(i+1)+")"} key={i}>
							<StorySlider width="80" color="#FF2222" arr={data.slice(parts[i],parts[i+1])} />
						</ClickInfo>
					);
				}
				else
				{	return (
						<ClickInfo title="Story" key={i}>
							<StorySlider width="80" color="#FF2222" arr={data} />
						</ClickInfo>
					);
				}
			})
		}
	}

	render() {
		if( this.state.dataV.hasOwnProperty('0') || this.state.dataH.hasOwnProperty('0'))
		{	return (
				<div>
					<div className="panel">
						<BreadCrumb data={this.crumbData}/>
						<hr color="#E70013" />
						<h1 className="heading focus-in-expand"> {this.state.name} </h1> 
						<hr color="#E70013" className="rule"/>
						<div className="bio">
							<p dangerouslySetInnerHTML={{ __html: this.state.genData.bio }} />
						</div>
						<div className="bd-img-con fade-in">
							<img src={this.state.genData.link} alt={this.state.name}/>
						</div>
						<div className="title-con">
							<h2 className="left-title"> Leader </h2>
						</div>
						{ this.filterLeader() }
						<div className="title-con">
							<h2 className="left-title"> Notable Members </h2>
						</div>
						{ this.filterMember() }
						<div className="title-con">
							<h2 className="left-title"> Other Members </h2>
						</div>
						{ this.checkHeroLoaded() }
						{ this.checkVillLoaded() }						
					</div>
				</div>
			);
		}
		else if (this.state.type === 'story')
		{	return (
				<div>
					<div className="panel">
						<BreadCrumb data={this.crumbData}/>
						<hr color="#E70013" />
						<h1 className="heading focus-in-expand"> {this.state.name} </h1> 
						<hr color="#E70013" className="rule"/>
						<div className="bio">
							<p dangerouslySetInnerHTML={{ __html: this.state.genData.descr }} />
						</div>
						<div className="bd-img-con fade-in">
							<img src={this.state.genData.link} alt={this.state.name}/>
						</div>
						{ this.checkParts() }
					</div>
				</div>
			);
		}
		else
		{	let size = ((window.screen.availWidth < 600 ) ? 200 : 350 ) ;
			return (
				<div>
					<div className="panel">
						<div className="loader">
							<CircleLoader sizeUnit={"px"} size={size} 
							color={'#e70013'} loading={true}/>
						</div>
						<h2 className="load-text"> Loading ... </h2>
					</div>  
				</div>
			) ;
		}
	}
}

export default BigDetail ; 
