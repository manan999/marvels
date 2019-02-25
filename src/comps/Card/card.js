import React from 'react' ;
import './card.css' ;
import 'tachyons' ;

const Card = (props) => {
	return (
		<div className="cards" >
			<img src = {props.link} alt = 'Cap_Ame' />
			<div>
				<h2> {props.name} </h2>
				<p> {props.rn} </p>
			</div>
		</div>
	) ;
}

export default Card ;