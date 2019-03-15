import React, { Component } from 'react';

import Item from './Item/Item.js' ;
import './list.css' ;

class List extends Component {
	createItems = () => {
		let {items, titles} = this.props ;
		return items.map( (item, i) => <Item title={titles[i]} key={i} value={item} up="up"/> )
	}

	render() {
		
		return (
			<div className="list">
				{ this.createItems() }
			</div>
		);
	}
}

export default List ;
