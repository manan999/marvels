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
	
	render()
	{	//console.log(this.state) ;
		return (
			<div className="cards" >
				<img src = {this.props.link} alt = 'Cap_Ame' />
				<div>
					<h2> {this.props.name} </h2>
					{ this.checkBig() }
				</div>
			</div>
	) ;
	}
}

export default Card ;