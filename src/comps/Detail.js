import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import './details.css' ;
import List from './List/List.js' ;
import Item from './List/Item/Item.js' ;

class Detail extends Component {
	constructor()
	{
		super()
		this.state = {
			type : '' ,
			name : '' ,
			data : {} ,
		}
	}

	componentDidMount = () => {
		let str = window.location.pathname ;
		str = str.slice(1).replace(/%20/g, ' ') ;
		str = str.split('/') ;
		this.setState({ type: str[0] , name: str[1] }, () => this.getHeroData() );
	}

	getHeroData = () => {
		if(this.state.type === 'hero')
		{
			fetch('http://mrvl-api.herokuapp.com/bigh?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => {
		            // console.log(resp) ;
		            this.setState({data: resp[0]});
		                	} )
		    .catch( err => console.log(err) ) ;
		}
		else
		{
			fetch('http://mrvl-api.herokuapp.com/bigv?name=' + this.state.name)
			.then( res => {
				    if ( res.ok )
		              return res.json() ;
		            else 
		              throw Error(res.statusText)
		          } )
		    .then( resp => {
		            // console.log(resp) ;
		            this.setState({data: resp[0]});
		                	} )
		    .catch( err => console.log(err) ) ;
		}		
	}

	render() {
		let {name, realname, biglink, combt, country, first, gender} = this.state.data ;
		let {intel, magic, origin, speed, stren, universe, tough} = this.state.data ;
		let items = [realname, gender, universe, origin, country] ;
		let titles = ['Real Name:', 'Gender:', 'Universe:', 'Species:', 'Nationality:'] ;
		//console.log(this.state) ;
		//console.log(items) ;
		if( this.state.data )
		{
			return (
				<div>
					<div className="panel">
						<hr color="#E70013" />
						<h1 className="heading"> {name} </h1> 
						<hr color="#E70013" className="rule"/>
						<div className="img-long">
							<img src={biglink} alt={name}/>
						</div>
						<div className="content" >
							<List titles={titles} items={items}/>
							<Item title="First Appearance: " value={first} className="out-list"/>
						</div>
					</div>
				</div>
			);
		}
		else
			return (
				<div>
					<div className="panel">
						<CircleLoader sizeUnit={"px"} size={150} color={'#e70013'} loading={true} />
						Loading ...
					</div>  
				</div>
			) ;
	}
}

export default Detail ; 
