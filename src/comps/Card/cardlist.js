import React from 'react' ;
import Card from './card.js' ;

const Cardlist = ({arr, humaraPath, big}) => {
	return (
		<div className="cardlist">
			{   arr.map( (user, i) => <Card key={i} id={user.id} name={user.name} humaraPath={humaraPath} rn={user.realname} link={user.link} big={big}/> )
			}
		</div>	
	) ;
} ;

export default Cardlist ;