import React from 'react' ;

const StreamList = (props) => {
	console.log(props.location.pathname) ;
	console.log(window.location.href) ;
	console.log(window.location.pathname) ;

	return (
		<div>
			This is the StreamList
		</div>
		) ;
}

export default StreamList ;