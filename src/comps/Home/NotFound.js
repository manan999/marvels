import React from 'react';
import './not.css' ;
import i04 from '../img/404.webp' ;

const NotFound = () => {
	return (
		<div className="panel">
			<h1 className="f04"> 404 </h1>
			<h2 className="f03"> Not Found ! </h2>
			<img src={i04} alt="Not_Found" className="nf"/>  
			<p className="taunt"> Sorry!, the page you were looking for 
				<br/> Cannot be found on this server
			</p>
			<p className="taunt"> Unless, you were looking for this page... 
				<br/> In which case you totally found it
			</p>
		</div>
	);
}

export default NotFound ;


				

				