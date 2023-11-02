//шукаємо елементи
const formElem = document.querySelector('.login-form');
//навішуємо слухачів
formElem.addEventListener('submit', onFormSubmit);
//створюємо функцію
function onFormSubmit(event) {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const result ={}
    if (email && password) {
        result.email = email; result.password = password;
        console.log(result);        
    } else {
            alert('Please, fill in all the fields')
    }
    event.target.reset();
}