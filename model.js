//создаем класс Empl со статическим свойством id
class Empl {
	static id = 1; //индивидуальный номер сотрудника
	constructor (name, workDay, birthDay, eMail) {
		this['Табельный №'] = Empl.id++; 
		this.name = name;
		this.workDay = workDay;
		this.birthDay = birthDay;
		this.eMail = eMail;
		};
	getProperties() {           //метод, который формирует массив properties, где каждый элемнт - это ключ (название свойства)
		const properties = [];
		for (let x in this) {
			properties.push(x);
		}
		return properties;
	};
	createFormFoNewEmpl() {    //метод, создает форму с полями для ввода нового сотрудника
		const myForm = document.createElement('form');
		for (let x in this) {
			if ((typeof this [x] != 'function') && (x != 'Табельный №')) {
				const myInput = document.createElement('input');
				myForm.appendChild(myInput);
				myInput.setAttribute('placeholder', x); //назаначаем каждому полю атрибут placeholder, в соответствии с названием свойства класса Empl
				myInput.setAttribute('id', 'id_' + x);  //назаначаем каждому полю атрибут id, в соответствии с названием свойства класса Empl
			}
		}
		return myForm;
	};
	getDataFromForm() {        //метод, который создает новый экземпляр объекта класса на основании данных введенных в формы
		for (let x in this) {
			if ((typeof this [x] != 'function') && (x != 'Табельный №')) {
				let dataValue = document.getElementById('id_' + x).value;
				console.log(dataValue);
				this[x] = (dataValue) ? dataValue : '';
			}
		}
		return this;
	}
}