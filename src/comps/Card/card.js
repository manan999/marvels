import React from 'react' ;
import './card.css' ;
//import 'tachyons' ;

class Card extends React.Component
{
	constructor (props) {
		super(props) ;
		this.state = {
			big : this.props.big ,
		}
	}

	checkBig = () =>{
		if( this.state.big === 'yes')
			return <p> {this.props.rn} </p> ;
	}

	checkNum = () =>{
		if( isNaN(this.props.name.charAt(this.props.name.length-1)) === false)
			return this.props.name.slice(0, this.props.name.length-2) ;
		else
			return this.props.name ;
	}
	
	render()
	{	const str = 'cards ' + this.state.big ;
		return (
			<div className={str} >
				<img src = {this.props.link} alt = 'Cap_Ame' />
				<div>
					<h2> {this.checkNum()} </h2>
					{ this.checkBig() }
				</div>
			</div>
	) ;
	}
}

export default Card ;