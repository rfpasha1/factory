/* ****************************************************************************************** */
//Создаем список select для сортировки сотрудников по разным свойствам
/*функция, которая создает select для сортировки или поиска сотрудников по свойствам. Функция принимает в качестве аргументов:
массив, на основе которого создается select; id - для назаначения атрибута id списка select; 
value - для присваевания текста первому option*/
function createMySelect(empls, id, value) {
	const mySelect = document.createElement('select');
	mySelect.setAttribute('id', id);                       //назаначаем атрибут id для select
	const firstOption = document.createElement('option');  //создаем первый option 
	firstOption.setAttribute('disabled', 'disabled');      //с атрибутом disabled
	firstOption.setAttribute('selected', 'selected');
	firstOption.text = value;                              //присваеваем текст первому option
	mySelect.appendChild(firstOption);                     //присоединяем первый option к списку mySelect
	const props = empls[0].getProperties();                //формируем массив props из ключей (названия свойств) объекта empls[0]
	createOption(props, mySelect);
	return mySelect;
}
/* ****************************************************************************************** */
//функция, которая создает option из элементов массива props и добавляет option в список mySelect
function createOption(props, mySelect) {
	props.forEach(elem => {
		const myOption = document.createElement('option');
		myOption.text = elem;                               //присваеваем текс для option
		myOption.value = elem;                              //присваеваем значение для атрибута value в option 
		mySelect.appendChild(myOption);                     //присоединяем option к списку mySelect
	});

}

/* ****************************************************************************************** */
/*
Второй способ создания option для select из элементов массива props
function createOption(props, mySelect) {
	const options = props.map (elem => {
		let newOption = document.createElement('option');
		newOption.setAttribute('value', elem);              //присваеваем значение для атрибута value в option
		const txt = document.createTextNode(elem);          //создаем текстовый узел для option
		newOption.appendChild(txt);                         //присоединяем текстовый узел к option
		mySelect.appendChild(newOption);                    //присоединяем option к списку mySelect
	});
}
*/