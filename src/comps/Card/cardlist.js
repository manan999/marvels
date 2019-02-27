import React from 'react' ;
import Card from './card.js' ;

const Cardlist = (props) => {
	// const cardl = 
	return (
		<div>
			{   props.arr.map( (user, i) => {
					return (<Card key={i} id={user.id} name={user.name} 
								  rn={user.realname} link={user.link} big={props.big}/>) ;
					} )	}
		</div>	
		) ;
} ;

export default Cardlist ;