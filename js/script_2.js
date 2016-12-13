var nameLoginArr = ['Сергей', 'Антон', 'Андрей', 'Евгений', 'Дмитрий'];

function inputName() { // Функция ввода массива имён
	for (var i = 0 ; i <= 4; i++) {
		nameLoginArr[i] = prompt('Укажите имя', nameLoginArr[i]);
		if ( nameLoginArr[i] === null ){
			alert('Вы не ввели даные');
		}
	}
}

function inputNameLogin() { // функция ввода и проверки Логина
	var nameLogin = prompt('Укажите Логин', '');
	if ( nameLogin === null ){
		alert('Вы не ввели Логин');
		return;
	}
	for (var t = 0 ; t <= 4; t++) {
		if (nameLoginArr[t] === nameLogin) {
			var namePerson = nameLogin + ', вы успешно вошли';
			alert(namePerson);
			return;
		}
	}
	alert('Ваш логин неверный!');
	return;
}

inputName();
inputNameLogin();
