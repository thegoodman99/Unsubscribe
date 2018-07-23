$(document).ready(function() {

	$('#preference').on('submit', function(e) {
		
	  var $this = $(this); 
		var options = {
			"Gender": $("input[name='gender']:checked").length,	
			"Categories": $("input[name='categories']:checked").length,
			"Frequency": $("input[name='frequency']:checked").length,
			"Unsubscribe": $("input[name='newSub-unsubscribe']:checked").length,
			"Postal": $("input[name='postalCode']").val()				
		};

		//validation
		if (options.Gender < 1 || options.Categories < 1 ||
			  options.Frequency < 1 || options.Unsubscribe < 1 || 
			  options.Postal === 'Postal Code') {
			$('.newSubscription-error').text('Please fill out all fields.');
			e.preventDefault();
				if (options.Gender < 1) {
					$('#gender').addClass("errorHelp");
				}
				if (options.Categories < 1) {
					$('#categories').addClass("errorHelp");
				}
				if (options.Frequency < 1) {
					$('#frequency').addClass("errorHelp");
				}
				if (options.Unsubscribe < 1) {
					$('#unsubscribe').addClass("errorHelp");
				}
				return;
		}		
	})
})
