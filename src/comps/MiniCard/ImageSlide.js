import React, { Component } from 'react';

import './ImageSlide.css' ;
import SingleSlider from '../slider/singleslider/SingleSlider.js' ;

import m1 from '../img/m.webp' ;
import m2 from '../img/__m2.webp' ;
import m3 from '../img/m3.webp' ;

const images = [ m1, m2, m3 ] ;

class ImageSlide extends Component {
	render() {
		return (
			<div>
				<div>
					<h3> We are a Database based on Marvel Comics and Movies.
						 This database has been created by Manan Aggarwal.
					</h3>
					<SingleSlider width="100" color="#E70013" arr={images} autoplay="on" interval={7000}/>
				</div> 
			</div>
		);
	}
}

export default ImageSlide ;
