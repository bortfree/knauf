$(function() {

	

	$(".popup").magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".menu ul li a").mPageScroll2id({
          offset: 86
        });

	// Set options
	 var options = {
	 	offset: '#showHere',
	 	offsetSide: 'top',
	 	classes: {
	 		clone:   'banner--clone',
	 		stick:   'banner--stick',
	 		unstick: 'banner--unstick'
	 	}
	 };

        // Initialise with options
        var banner = new Headhesive('.banner', options);

        // Headhesive destroy
        // banner.destroy();

	$(".slider_home").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		autoplay: true, 
		autoplayTimeout: 5000
	});

	$(".slider_work").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
		autoplay: true, 
		autoplayTimeout: 5000
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
        items: {
          src: '.done'
        },
        type: 'inline'
      });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
