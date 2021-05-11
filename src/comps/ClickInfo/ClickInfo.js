import React, {useState} from 'react';

import './clickinfo.css' ;

const ClickInfo = ({children, title}) => {

	const [show, setShow] = useState(false) ;

	const onButtonClick = () => setShow(!show) 

	return (
		<div>
			<div className="ci-con">
				<p className="ci-head"> {title+' :'} </p>
				<button style={ {backgroundColor: (show?"#E70013":"") } } className="ci-btn" onClick={onButtonClick}> 
					{show?'Hide':'Show'} </button> 
			</div>
			<div>
				{show?children:null}
			</div> 
		</div>
	);
}

export default ClickInfo ;
