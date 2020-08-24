import React, { Component } from 'react';

import './storyslider.css' ;

class StorySlider extends Component {
	
	state = {
		data: this.props.arr[0],
		page: 0,
		lang: 'hindi',
		quality: 'high',
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

	qualChange = () => {
		if(this.state.quality === 'high')
			this.setState({quality : 'low'}) ;
		else
			this.setState({quality : 'high' }) ;
	}

	render() {
		const {data, quality, lang} = this.state ;
		return (
			<div className="story-slider-cont">
				<div className="page-con">
					<p> <strong> Page: </strong> {data.page} </p>
					<div>
						<button className="lang-btn" onClick={this.langChange}> 
							{(lang==='hindi')?'Hindi':'English'}
						</button>
						<button className="lang-btn" onClick={this.qualChange}> 
							{(quality==='high')?'High Quality':'Low Quality'}
						</button>
					</div>
				</div>

				<img className="story-slider-image " key={data.page} src={data[quality]} alt={data[quality]} />

				<button className="story-slider-btn btn-left" onClick={this.onPrevClick}> &lt; </button> 
				<button className="story-slider-btn btn-right" onClick={this.onNextClick}> &gt; </button>

				<div className="slide-nav">	{this.createDots()} </div>
				
				<div className="story-con">
					<p dangerouslySetInnerHTML={{ __html: data[lang] }} />
				</div>
			</div>
		);
	}
}

export default StorySlider ;