'use strict';

 let menuBtn = document.getElementById('menuBtn'),
	leftAhead = document.getElementById('leftAhead');  

menuBtn.addEventListener('click', function leftAheadOpen() {	
	let menuClosed = (leftAhead.style.cssText = `width: 0px; opacity: 0;`);
    let menuOpened = (leftAhead.style.cssText = `width: 200px; opacity: 1;`);
	
	if (menuClosed) {
		return (menuOpened);
	} else {
		menuClosed;
	}
	
}, false);



 