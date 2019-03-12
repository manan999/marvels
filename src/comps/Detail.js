import React, { Component } from 'react';
import CircleLoader from 'react-spinners/CircleLoader' ;

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
		//console.log(this.state) ;
		if( this.state.data !== {} )
		{
			return (
				<div>
					<div className="panel">
						This is the page for {this.state.type + ' ' + this.state.name}
					</div>
				</div>
			);
		}
		else
			return (
				<div>
					<CircleLoader sizeUnit={"px"} size={150} color={'#e70013'} loading={true} /> 
				</div>
			) ;
	}
}

export default Detail ; 
