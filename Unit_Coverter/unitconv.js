var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",converter);
inputType.addEventListener("change",converter);
resultType.addEventListener("change",converter);

option_from = inputType.value;
option_to   = resultType.value;


function converter(){

	option_from = inputType.value;
	option_to = resultType.value;

	if(option_from === "Milligram" && option_to==="Gram"){ 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "Milligram" && option_to==="Kilogram"){ 
		result.value = Number(input.value) * 0.000001;
	}else if(option_from === "Milligram" && option_to==="Milligram"){ 
		result.value = input.value
	}

	if(option_from === "Kilogram" && option_to==="Milligram"){
		result.value = Number(input.value) * 1000000;
	}else if(option_from === "Kilogram" && option_to==="Gram"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "Kilogram" && option_to==="Kilogram"){ 
		result.value = input.value
	}

	if(option_from === "Gram" && option_to==="Kilogram"){
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "Gram" && option_to==="Milligram"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "Gram" && option_to==="Gram"){
		result.value = input.value
	}
	}