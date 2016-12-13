var numberOne,
		numberPower,
		resultPower;

function inputNumber() {
	numberOne = prompt('Укажите число цифрой', '');
	numberPower = prompt('Укажите степень цифрой', '');
	auditNumber();
}

function auditNumber() {
	if ( (numberOne === null) || (numberPower === null) ){
		resultPower = "вы не ввели число или степень";
		alert(resultPower);
		return inputNumber();
	}
	typeNumberOne  = +numberOne;
	typeNumberPower = +numberPower;

	if ( isNaN(typeNumberOne) || isNaN(typeNumberPower) ){
		resultPower = "нужно вводить цифрой";
		alert(resultPower);
		return inputNumber();
	}
	return;
}

function pow() {
	var resultPower = numberOne;
	if (numberOne == 0) {
		resultPower = "не имеет смысла";
		return resultPower;
	}

	if (numberPower == 0) {
		resultPower = 1;
		return resultPower;
	}

	if (numberOne > 0 && numberPower > 0) {
		for (var d = 1 ; d < numberPower; d++) {
			resultPower *= numberOne;
		}
		return resultPower;
	}

	if (numberOne < 0 && numberPower > 0) {
		for (var i = 1 ; i < numberPower; i++) {
			resultPower *= numberOne;
		}
		return resultPower;
	}
	return;
}

inputNumber();
var powStart = pow();
console.log(powStart);
