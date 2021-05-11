import React from 'react' ;
import { withRouter } from 'react-router-dom' ;

import './card.css' ;

const checkNum = (str) =>{
	if( isNaN(str.charAt(str.length-1)) === false)
		return str.slice(0, str.length-2) ;
	else
		return str ;
}

const Card = ({big, humaraPath, name, history, link, rn}) => {

	const onCardClick = () => {
		if(humaraPath)
		{	let str = humaraPath + name ;
			
			if(window.location.pathname.length > 8 )
				history.push('/') ;
			history.push(str) ;
		}
	}
	
	return (
		<div className={'cards '+big} data-aos="zoom-in" onClick={onCardClick}>
			<img src = {link} alt = 'Cap_Ame' />
			<div>
				<h2> {checkNum(name)} </h2>
				{ big==='yes'?<p>{rn}</p>:null }
			</div>
		</div>
	) ;
}

export default withRouter(Card)  ;