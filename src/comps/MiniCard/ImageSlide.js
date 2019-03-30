import React, { Component } from 'react';

import './ImageSlide.css' ;
import SlideShow from '../Slideshow/SlideShow.js' ;

class ImageSlide extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> We are a Database based on Marvel Comics and Movies.
						 This database has been created by Manan Aggarwal.
					</h3>
					<SlideShow /> 
				</div> 
			</div>
		);
	}
}

export default ImageSlide ;
