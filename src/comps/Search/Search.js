import React from 'react' ;
import './search.css' ;

const Searchbar = ({searchChange, byname, byalias}) => {
	let url = window.location.pathname.slice(1) ;
	return (
		<div className="padded">	
			<input className='searchbox' type='search' placeholder={'Search ' + url} onChange={searchChange} />
			<br/>	
		</div>
		) ;
}

export default Searchbar ;

// <button className="by-name" onClick={byname}> By Name </button>
// 			<button className="by-alias" onClick={byalias}> By Alias </button> 