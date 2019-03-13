import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

import './details.css' ;

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
			fetch('http://magic-brain-api.herokuapp.com/bigh?name=' + this.state.name)
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
			fetch('http://magic-brain-api.herokuapp.com/bigv?name=' + this.state.name)
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
		console.log(this.state) ;
		if( this.state.data )
		{
			return (
				<div>
					<div className="panel">
						<div className="content" >
							{this.state.data.name + ' ' + this.state.data.realname}
						</div>
						<div className="img-long">
							<img src={this.state.data.biglink} alt={this.state.data.name}/>
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
