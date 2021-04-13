import React from 'react';
import {Link} from 'react-router-dom' ;

import './BreadCrumb.css' ;

const BreadCrumb = ({data}) => {	
	return (
		<div className="crumb">
			{data.map(item => <Link to={item.link} key={item.name}> {item.name} </Link> )}
		</div>
	);
}

export default BreadCrumb ;
