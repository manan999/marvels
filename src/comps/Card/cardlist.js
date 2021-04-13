import React from 'react' ;
import Card from './card.js' ;

const Cardlist = ({arr, path, big}) => {
	return (
		<div className="cardlist">
			{   arr.map( (user, i) => <Card key={i} id={user.id} name={user.name} path={path} rn={user.realname} link={user.link} big={big}/> )
			}
		</div>	
	) ;
} ;

export default Cardlist ;