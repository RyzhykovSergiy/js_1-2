function pow() {
	var numberOne = prompt('Укажите число', ''),
			numberPower = prompt('Укажите степень', ''),
			resultPower = numberOne;

	for (var i = 2 ; i <= numberPower; i++) {
		resultPower = resultPower * numberOne;
	}

	return resultPower;
}

var powStart = pow();

console.log(powStart);

