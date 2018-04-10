
$(document).ready(function() {

	$('input#input_text, textarea#textarea2').characterCounter();
	$('.collapsible').collapsible();

	$('#submit').click(function(){
		 searched = $('textarea#searchID').val();
		console.log(searched);
		movieInfo(searched, function (err, res){
		    if (err) return err;
		    console.log(res)
		})

		movieInfo(searched)
		.then(console.log)
		.catch(console.log) 		
	})

});

