import React, { Component } from 'react';

import './storyslider.css' ;

class StorySlider extends Component {
	
	state = {
		data: this.props.arr[0],
		page: 0,
		lang: 'hindi',
	}

	createDots = () => {
		return this.props.arr.map( (im,i) => <div key={i} className="story-slider-dot" style={{ backgroundColor: this.checkColor(i)}} onClick={() => this.setPage(i)}/> ) ;
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

	langChange = () => {
		if(this.state.lang === 'hindi')
			this.setState({lang : 'english'}) ;
		else
			this.setState({lang : 'hindi' }) ;
	}

	render() {
		const {data} = this.state ;
		console.log(data) ;
		return (
			<div className="story-slider-cont">
				<div className="page-con">
					<p> <strong> Page: </strong> {data.page} </p>
					<button className="lang-btn" onClick={this.langChange}> 
						{(this.state.lang==='hindi')?'Hindi':'English'}
					</button>
				</div>

				<img className="story-slider-image " key={data.page} src={data.img} alt={data.img} />

				<button className="story-slider-btn btn-left" onClick={this.onPrevClick}> &lt; </button> 
				<button className="story-slider-btn btn-right" onClick={this.onNextClick}> &gt; </button>

				<div className="slide-nav">	{this.createDots()} </div>
				
				<div className="story-con">
					<p dangerouslySetInnerHTML={{ __html: data[this.state.lang] }} />
				</div>
			</div>
		);
	}
}

export default StorySlider ;