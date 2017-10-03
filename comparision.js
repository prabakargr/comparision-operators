function equalFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML=(a == b);
}
function equaltypeFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a === b);
}
function notequalFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a != b);
}
function notequaltypeFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a !== b);
}
function greaterthanFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a > b);
}
function lesserthanFunction() {
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a < b);
}
function greaterthanequalFunction(){
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a >= b);
}
function lesserthanequalFunction(){
	var a = document.getElementById('input1').value
	var b = document.getElementById('input2').value
	document.getElementById('output').innerHTML = (a <= b);
}