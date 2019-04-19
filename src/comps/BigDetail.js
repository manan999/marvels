import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import CardList from './Card/cardlist.js' ;
import './details.css' ;

class BigDetail extends Component {
	constructor()
	{
		super()
		this.state = {
			type : '' ,
			name : '' ,
			data : {} ,
		}
	}


	format = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] }, () => this.getTeamStoryData()) ;
	}

	getTeamStoryData = () => {
		if(this.state.type === 'team')
		{	fetch('http://mrvl-api.herokuapp.com/tspv?team=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => {
		            //console.log(resp) ;
		            this.setState({data: resp});
		            	} )
		    .catch( err => console.log(err) ) ;
		}
		else
			console.log(this.state.type, this.state.name) ;
	}

	componentDidMount = () => {
		this.format() ;
	}

	render() {
	//	console.log(this.state.data) ;
		if( this.state.data.hasOwnProperty('0') )
		{	return (
				<div>
					<div className="panel">
						<hr color="#E70013" />
						<h1 className="heading focus-in-expand"> {this.state.name} </h1> 
						<hr color="#E70013" className="rule"/>
						<CardList arr={this.state.data} big="yes" path="hero/" />
					</div>
				</div>
			);
		}
		else
			return (
				<div>
					<div className="panel">
						<div className="loader">
							<CircleLoader sizeUnit={"px"} size={350} color={'#e70013'} loading={true}/>
						</div>
						<h2 className="load-text"> Loading ... </h2>
					</div>  
				</div>
			) ;
	}
}

export default BigDetail ; 
