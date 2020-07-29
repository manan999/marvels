import React, { Component } from 'react';

import './clickinfo.css' ;

class ClickInfo extends Component {
	state = {
		show : 'Show' ,
	}

	checkClick = () => {
		if(this.state.show === 'Hide')
			return this.props.children ;
	}

	onButtonClick = () => {
		let st = (this.state.show === 'Show'? 'Hide' : 'Show') ;
		this.setState({show : st})
	}

	checkStyle = () => {
		if(this.state.show === 'Hide')
			return { backgroundColor: '#E70013' } ;
	}

	render() {
		return (
			<div>
				<div className="ci-con">
					<p className="ci-head"> {this.props.title+' :'} </p>
					<button style={this.checkStyle()} className="ci-btn" onClick={this.onButtonClick}> 
						{this.state.show}
					</button> 
				</div>
				<div>
					{this.checkClick()}
				</div> 
			</div>
		);
	}
}

export default ClickInfo ;
