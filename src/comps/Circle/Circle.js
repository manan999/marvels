import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './circle.css' ;

const Circle = ({text, num}) => {
	return (
		<div className="cir" data-aos="zoom-in">
		  	<p className="lbl"> {text} </p> 		
	      	<CircularProgressbar percentage={num} text={num} background backgroundPadding={8}
	        styles={{
	          background: {
	            fill: '#8b0013',
	          },
	          text: {
	            fill: '#fff',
	            size : '2em'
	          },
	          path: {
	            stroke: '#fff',
	          },
	          trail: { stroke: 'transparent' },
	        }}
	      />
	    </div>
	);
}

export default Circle ;
