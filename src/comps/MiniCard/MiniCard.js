import React from 'react';
import {Link} from'react-router-dom' ;

import './mini.css' ;

const select = (path) => {	
	if(path !== '/gallery')
	{	return (
			<div className="next" >
				<Link className="heartbeat" to={path}> More </Link> 
			</div>
		) ;
	}
}

const MiniCard = ({head, children, path}) => {
	return (
		<div className="mini">
			<h2> {head} </h2>
			<div> {children} </div>
			{select(path)}
		</div>
	);
}

export default MiniCard ;
