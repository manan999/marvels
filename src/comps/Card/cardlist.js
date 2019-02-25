import React from 'react' ;
import Card from './card.js' ;

const Cardlist = ({friends}) => {
	// const cardl = 
	return (
		<div>
			{   friends.map( (user, i) => {
					return (<Card key={i} id={user.id} name={user.name} rn={user.realname} link={user.link}/>) ;
					} )	}
		</div>	
		) ;
} ;

export default Cardlist ;