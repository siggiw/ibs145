$(document).ready(function() {
    $("#fragenue").accordion({heightStyle: "content"});
    
    $(".col-md-4 .thumbnail img").click(function(){
        $(this).effect('bounce', {times:3}, 500);
    });
    
	
	
    $.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});
    
    $("#commentForm").validate();

	// validate signup form on keyup and submit
	$("#signupForm").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			username: {
				required: true,
				minlength: 2
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			topic: {
				required: "#newsletter:checked",
				minlength: 2
			},
			agree: "required"
		},
		messages: {
			firstname: "Please enter your firstname",
			lastname: "Please enter your lastname",
			username: {
				required: "Please enter a username",
				minlength: "Your username must consist of at least 2 characters"
			}

		}
	});

	

	
});




