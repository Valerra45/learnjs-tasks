let userName = prompt('Кто там?', '');

if (userName == '' || userName == null) {
    alert('Отменено');
} else if (userName != 'Админ') {
    alert('Я вас не знаю');
} else {
    let pass = prompt('Пароль?', '');

    if (pass == '' || pass == null) {
        alert('Отменено');
    } else if (pass == 'Я главный') {
        alert('Здравствуйте!');
    } else {
        alert('Неверный пароль');
    }
}