import React from 'react' ;
import './search.css' ;

const Searchbox = ({searchChange, byname, byalias}) => {
	return (
		<div className="padded">	
			<input className='searchbox' type='search' placeholder='Search Avengers' onChange={searchChange} />
			<br/>
			<button className="by-name" onClick={byname}> By Name </button>
			<button className="by-alias" onClick={byalias}> By Alias </button> 
		</div>
		) ;
}

export default Searchbox ;