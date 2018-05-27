var inputSet = "<input class='input-image' placeholder='image src'/> <input class='input-title' placeholder='slide title'/> <input class='input-content' placeholder='slide content'/>"

function buildInputFields(numOfInput) {
	var inputFields = '', inputWrapper = '';

	while (numOfInput > 0) {
		//output number of slides
		inputWrapper = "<div class='input-wrapper' id=input-" + numOfInput + "/>";
		inputFields += inputWrapper + inputSet + "</div>";
		numOfInput--;
	}

	$(".input-fields").html(inputFields);
}

function initSliderBuilder() {
	$(".number-of-slides").on("change", function() {
		buildInputFields(this.value);
	});
}


$(document).ready(function() {
	initSliderBuilder();
});