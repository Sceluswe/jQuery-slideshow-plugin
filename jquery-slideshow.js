/*
* Box 8 Slideshow
*/
(function ( $ ) {
	$.fn.slideshow = function (options) {
		// Handle settings
		if(typeof options !== 'null' && typeof options !== 'undefined') {
			$(".slideshow").css(options);
		}
		// Slide the images.
		sce_slide();
		
		return this;
	}
		
	// Get the amount of images.
	var slides = $(".slideshow img").length;
	
	// Make <div> parent relative.
	$(".slideshow").css('position', 'relative');
	
	// Set CSS for the images.
	$(".slideshow img").css({
		'position': 'absolute',
		'top': '0',
		'left': '0',
		'z-index': '0px',
	});
	
	// The function that slides the images.
	 function sce_slide() {
		if(slides > 1) { //slide image
			$(".slideshow img").eq(slides -= 1).fadeOut('slow');
		} else { // reset slideshow
			for(var i = 0; i < slides-1; i++) {
				$(".slideshow img").eq(i).css('z-index', (i + 'px'));;
			}

			slides = $(".slideshow img").length;
			$(".slideshow img").eq(slides-1).fadeIn('slow');

			setTimeout(function () {
			for(var j = 0; j < slides-1; j++) {
				$(".slideshow img").eq(j).show();
			}
			}, 550);
		}
	};
	
	// When an image is clicked: slideshow().
	$(".slideshow img").click(function () {
		$(this).sce_slide();
	});

}( jQuery ));
// Make sure default CSS is applied before interval.
$(".slideshow img").slideshow();

setInterval( function () {
	$(".slideshow img").slideshow();
}, 5000);