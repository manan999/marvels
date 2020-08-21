import React, { Component } from 'react';

import './singleslider.css' ;

class SingleSlider extends Component {
	
	state = {
		data: this.props.arr[0],
		page: 0,
	}

	componentDidMount() 
	{	const interval = (this.props.interval)?this.props.interval:5000 ;
		if(this.props.autoplay === 'on')
			this.countdown = setInterval(this.onNextClick, interval);
	}

  	componentWillUnmount() {
    	if(this.props.autoplay === 'on')
			clearInterval(this.countdown);
  	}

	createDots = () => {
		return this.props.arr.map( (im,i) => <div key={i} className="slider-dot" style={{ backgroundColor: this.checkColor(i)}} onClick={() => this.setPage(i)}/> ) ;
	}

	checkColor = (num) => {
		if(num === this.state.page)
			return this.props.color ;
		else
			return '#ccc' ;
	}

	setPage = (num) => {
		this.setState({page: num, data: this.props.arr[num]}) ;
	}

	onNextClick = () => {
		let nextPage = (this.state.page+1)%this.props.arr.length ;
		this.setState({page: nextPage, data: this.props.arr[nextPage]}) ;
	}

	onPrevClick = () => {
		let prevPage = (this.state.page+this.props.arr.length-1)%this.props.arr.length ;
		this.setState({page: prevPage, data: this.props.arr[prevPage]}) ;
	}

	render() {
		const {data} = this.state ;
		return (
			<div className="slider-cont" style={ {width: this.props.width + '%'} }>
				<img className="slider-image fade-in" key={data} src={data} alt='marvel heroes' />

				<button className="slider-btn btn-left" onClick={this.onPrevClick}> &lt; </button> 
				<button className="slider-btn btn-right" onClick={this.onNextClick}> &gt; </button>

				<div className="slide-nav">	{this.createDots()} </div>

			</div>
		);
	}
}

export default SingleSlider ;