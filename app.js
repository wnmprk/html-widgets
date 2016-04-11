// tooltips for bootstrap
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// simple email validator function with regex
function validateEmail(email) {
    var checkFor = /\S+@\S+\.\S+/;
    return checkFor.test(email);
}

// add contact function, does not render 
function addContact(email) {
	if (validateEmail(email)) {
		var node = document.createElement("SPAN");
		var textnode = document.createTextNode(email);     
		node.className = "emailee";
		node.appendChild(textnode);
		document.getElementById("to-email").appendChild(node);
		// logs out new p with email
		console.log(node)
	}
}

// alerts for when email is sent successfully or unsuccessful
function sendEmail() {
	var e = document.getElementById('to-email').value;
	var m = document.getElementsByTagName('textarea')[0].value;
    if (validateEmail(e) && m) {
        var inputs = document.getElementsByTagName('input');
        for (var i in inputs) {
            inputs[i].value = '';
        }
        document.getElementsByTagName('textarea')[0].value = '';
        swal("Yay!", "Email sent successfully!", "success");
    } else {
        swal("Oops!", "Must have valid email and/or message!", "error");
    }
}

// zoom into artwork
function viewArt() {
	var imgSource = document.getElementById('painting').src;
	var options = {
        title: 'Misty Mood by Leonid Afremov',
        text: '<img width="100%" height="auto" src=' + imgSource + '>',
        html: true
    };
    swal(options);
}
