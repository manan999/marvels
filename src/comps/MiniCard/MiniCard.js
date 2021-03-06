import React from 'react';
import {Link} from'react-router-dom' ;

import './mini.css' ;

const select = (humaraPath) => {	
	if(humaraPath !== '/gallery')
	{	return (
			<div className="next" >
				<Link className="heartbeat" to={humaraPath}> More </Link> 
			</div>
		) ;
	}
}

const MiniCard = ({head, children, humaraPath}) => {
	return (
		<div className="mini">
			<h2> {head} </h2>
			<div> {children} </div>
			{select(humaraPath)}
		</div>
	);
}

export default MiniCard ;
