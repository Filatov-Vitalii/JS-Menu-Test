'use strict';

 let menuBtn = document.getElementById('menuBtn'),
	leftAhead = document.getElementById('leftAhead'); 
	
function getRealWidth(leftAhead) {
	if (leftAhead.currentStyle) {
		return leftAhead.currentStyle.width
	} else if (window.getComputedStyle) {
		let computedStyle = window.getComputedStyle(leftAhead, null);
		
		return computedStyle.getPropertyValue('width')
	}
}

function hide(leftAhead){
	if (!leftAhead.hasAttribute('widthOld')) {
		leftAhead.setAttribute('widthOld', leftAhead.style.width);
	}
	
	leftAhead.style.width = '0px';
}

let widthCache = {}

function show(leftAhead) {
	if (getRealWidth(leftAhead) != '0px') return 
	
	leftAhead.style.width = leftAhead.getAttribute('widthOld') || '0px';
	
	if (getRealWidth(leftAhead) === '0px') {
		let nodeName = leftAhead.nodeName, body = document.body, width
		
		if (widthCache[nodeName]) {
			width = widthCache[nodeName]
		} else {
			let testLA = document.createElement(nodeName)
				body.appendChild(testLA)
				width = getRealWidth(testLA)
				
				if (width === '0px') {
					width = '200px'
				}
				
				body.removeChild(testLA)
				widthCache[nodeName] = width
		}
		
		leftAhead.setAttribute('widthOld', width)
		leftAhead.style.width = width
	}
}
 
function isHidden(leftAhead) {
	let width = leftAhead.offsetWidth,
		height = leftAhead.offsetHeight,
		tr = leftAhead.nodeName.toLowerCase() === 'tr';
		
	return (width === 0 && height === 0 && !tr ? (width > 0 && height > 0 && !tr) :
	getRealWidth(leftAhead));
}


function toggle(leftAhead) {	
	isHidden(leftAhead) ? show(leftAhead) : hide(leftAhead);
}


 