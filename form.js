//функция, которая добавляет нового сотрудника из формы form в массив empls
function addNewEmpl (empls, myFormInput) {
	const newEmpl = new Empl();            //создаем новый экземпляр объекта Empl на основе данных формы
	newEmpl.getDataFromForm(myFormInput);
	empls.push(newEmpl);
	console.log(empls);
};
//функия, которая создает кнопку btn на форме и присваивает события этой кнопке при нажатии на нее 
function createButton (empls) {
	const btn = document.createElement('input');          //кнопка для добавления нового сотрудника 
	btn.setAttribute('type', 'button');
	btn.setAttribute('id', 'btn');
	btn.value = 'Добавить';
/*	
	btn.addEventListener('click', function() {             //назначаем события, которые будут происходить после нажатия на кнопку btn
		addNewEmpl(empls, '#employeeForm form');
		document.getElementById('main').innerHTML = ''; 
		document.getElementById('main').appendChild(createMyTable(empls)); //обновляем отображение таблицы
	});
*/
	//функция, которая оборачивает параметр (который необходимо передать) для обработчика события 
	const btnAdd = function(param) {
		addNewEmpl(param, '#employeeForm form');
		document.getElementById('main').innerHTML = ''; 
		document.getElementById('main').appendChild(createMyTable(param)); //обновляем отображение таблицы
	};
	btn.addEventListener('click', function() {             //назначаем события, которые будут происходить после нажатия на кнопку btn
	//если обработчику события нужно передать параметр, то его вызов нужно обернуть в функцию
		btnAdd(empls);
		document.querySelector('form').reset();      //обнуляем содержимое полей в форме 
	});
	return btn;
}