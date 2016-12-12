function pow() {
	var nameLoginArr = ['Сергей', 'Антон', 'Андрей', 'Евгений', 'Дмитрий'],
			proverLogin = 0;

	for (var i = 0 ; i <= 4; i++) {
		nameLoginArr[i] = prompt('Укажите имя', nameLoginArr[i]);
		console.log(nameLoginArr[i]);
	};

	var nameLogin = prompt('Укажите Login', '');

	if ( nameLogin == null ){
		alert('Вы не ввели логин');
		return;
	}

	for (var i = 0 ; i <= 4; i++) {
		if (nameLoginArr[i] === nameLogin) {
			proverLogin = 1;
		}
	};

	if (proverLogin === 1) {
		var namePerson = nameLogin + 'вы успешно вошли';
		alert(namePerson);
	} else  {
			alert('Ваш логин неверный!');
	};

	return;
};


var powStart = pow();
