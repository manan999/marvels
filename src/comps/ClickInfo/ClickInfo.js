import React, {useState} from 'react';

import './clickinfo.css' ;

const ClickInfo = ({children, title}) => {

	const [show, setShow] = useState('Show') ;

	const onButtonClick = () => {
		let st = (show === 'Show'? 'Hide' : 'Show') ;
		setShow(st)
	}

	const checkStyle = () => {
		if(show === 'Hide')
			return { backgroundColor: '#E70013' } ;
	}

	return (
		<div>
			<div className="ci-con">
				<p className="ci-head"> {title+' :'} </p>
				<button style={() => checkStyle()} className="ci-btn" onClick={onButtonClick}> 
					{show} </button> 
			</div>
			<div>
				{ show === 'Hide'? children : null}
			</div> 
		</div>
	);
}

export default ClickInfo ;
