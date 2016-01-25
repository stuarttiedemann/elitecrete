$(window).load(function(){
		// make navbar sticky
		$('#nav-wrapper').height($("#nav").height());

		$('#nav').affix({
			offset: {top: $('#nav').offset().top}
		});

		$('.carousel').carousel({
   			interval: 6000
  		}) 

	//This makes the mobile navbar retract after a link is clicked.
	$(document).on('click','.navbar-collapse.in',function(e) {
    	if( $(e.target).is('a') ) {
       	 $(this).collapse('hide');
    	}
	});

	$(".gallery").on('click',function() {
		$(setTimeout(function() {
			console.log("Isotope is running");
		  // init Isotope
		  var $grid = $('.grid').isotope({
		    itemSelector: '.element-item',
		    layoutMode: 'fitRows'
		  });
		  // filter functions
		  var filterFns = {
		    // show if number is greater than 50
		    numberGreaterThan50: function() {
		      var number = $(this).find('.number').text();
		      return parseInt( number, 10 ) > 50;
		    },
		    // show if name ends with -ium
		    ium: function() {
		      var name = $(this).find('.name').text();
		      return name.match( /ium$/ );
		    }
		  };
		  // bind filter button click
		  $('.filters-button-group').on( 'click', 'button', function() {
		    var filterValue = $( this ).attr('data-filter');
		    // use filterFn if matches value
		    filterValue = filterFns[ filterValue ] || filterValue;
		    $grid.isotope({ filter: filterValue });
		  });
		  // change is-checked class on buttons
		  $('.button-group').each( function( i, buttonGroup ) {
		    var $buttonGroup = $( buttonGroup );
		    $buttonGroup.on( 'click', 'button', function() {
		      $buttonGroup.find('.is-checked').removeClass('is-checked');
		      $( this ).addClass('is-checked');
		    });
		  });
		},1500));
  	});

	$(setTimeout(function() {
		console.log("Isotope is running");
	  // init Isotope
	  var $grid = $('.grid').isotope({
	    itemSelector: '.element-item',
	    layoutMode: 'fitRows'
	  });
	  // filter functions
	  var filterFns = {
	    // show if number is greater than 50
	    numberGreaterThan50: function() {
	      var number = $(this).find('.number').text();
	      return parseInt( number, 10 ) > 50;
	    },
	    // show if name ends with -ium
	    ium: function() {
	      var name = $(this).find('.name').text();
	      return name.match( /ium$/ );
	    }
	  };
	  // bind filter button click
	  $('.filters-button-group').on( 'click', 'button', function() {
	    var filterValue = $( this ).attr('data-filter');
	    // use filterFn if matches value
	    filterValue = filterFns[ filterValue ] || filterValue;
	    $grid.isotope({ filter: filterValue });
	  });
	  // change is-checked class on buttons
	  $('.button-group').each( function( i, buttonGroup ) {
	    var $buttonGroup = $( buttonGroup );
	    $buttonGroup.on( 'click', 'button', function() {
	      $buttonGroup.find('.is-checked').removeClass('is-checked');
	      $( this ).addClass('is-checked');
	    });
	  });
  	},1500));

	lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'alwaysShowNavOnTouchDevices':true,
      'fitImagesInViewport':true
    })
});



