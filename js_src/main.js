var animation = function() {

	if(isChrome || isBlink) {
		document.documentElement.className += ' gradient';
	}

	var setDashoffset = function(el) {
		var l = el.getTotalLength();
		el.setAttribute('stroke-dasharray', l);
		return [-l,0];
	}

	var letters = anime({ 
    targets: 'path.circle',
    transform: ['translate(0 -150)', 'translate(0 0)'],
    duration: 2400,
		delay: 600
  });

	var lines = anime({
		targets: ['#line-left', '#line-right'],
		strokeDashoffset: setDashoffset,
    duration: 2000,
		easing: 'easeOutCubic',
		complete: function() {
			document.documentElement.className += ' animation-done';
		}
	});

};

document.addEventListener('DOMContentLoaded', animation, false);
