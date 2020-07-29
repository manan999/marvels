import React from 'react' ;
import { withRouter } from 'react-router-dom' ;

import './card.css' ;

class Card extends React.Component
{
	state = {
		big : this.props.big ,
	} ;

	checkBig = () =>{
		if( this.state.big === 'yes')
			return <p> {this.props.rn} </p> ;
	}

	checkNum = (str) =>{
		if( isNaN(str.charAt(str.length-1)) === false)
			return str.slice(0, str.length-2) ;
		else
			return str ;
	}

	onCardClick = () => {
		let str ;
		if(this.props.path)
		{	str = this.props.path + this.props.name ;
			if(window.location.pathname.length > 8 )
				this.props.history.push('/') ;
			this.props.history.push(str) ;
		}
	}
	
	render()
	{	const str = 'cards ' + this.state.big ;
		return (
			<div className={str} data-aos="zoom-in" onClick={this.onCardClick}>
				<img src = {this.props.link} alt = 'Cap_Ame' />
				<div>
					<h2> {this.checkNum(this.props.name)} </h2>
					{ this.checkBig() }
				</div>
			</div>
	) ;
	}
}

export default withRouter(Card)  ;