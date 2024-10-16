/*Создать приложение для учета сотрудников предприятия. Оно должно отобразить список всех сотрдников.
	Предоставить форму для ввода нового сотрудника. Добавить функционал для сортировки списка сотрудников по разным ключам,
	задать поиск сотрудника по разным ключам. Каждый сотрудник имеет: уникальный номер; имя; дату поступления на работу; дату рождения;
	электронный адрес. Даты определяются только годом (год поступления на работу и год рождения).
*/

//**********__________**********----------*****_____Spero dum vivo_____*****----------**********__________**********\\
//формируем массив empls, где каждый элемент - это объект класса Empl каждого сотрудника
const empls = [];
empls[0] = new Empl('Maik', 2015, 2000, 'a@i.ua');
empls[1] = new Empl('Anna', 2018, 2002, 's@i.ua');
empls[2] = new Empl('Boris', 2011, 1995, 'b@i.ua');
empls[3] = new Empl('Olga', 2019, 1998, 'o@i.ua');
empls[4] = new Empl('Pit', 2002, 1985, 'p@i.ua');
empls[5] = new Empl('Katya', 2001, 1991, 'k@i.ua');
console.log(empls);
//**********__________**********----------*****_____Spero dum vivo_____*****----------**********__________**********\\

//отображаем список сотрудников в div id="main" 
document.getElementById('main').appendChild(createMyTable(empls));

//**********__________**********----------*****_____Spero dum vivo_____*****----------**********__________**********\\

//создаем кнопки для переключения функциональности (форма для ввода сотрудника, сортирока сотрудников, поиск сотрудника)
const BTN1 = document.createElement('input');   //кнопка для показа формы новый сотрудник 
const BTN2 = document.createElement('input');   //кнопка для показа списка select для сортировки сотрудника
const BTN3 = document.createElement('input');   //кнопка для показа списка select и поля ввода для поиска сотрудника
BTN1.setAttribute('type', 'button');
BTN1.setAttribute('id', 'butForm');
BTN1.value = 'FORM';
BTN2.setAttribute('type', 'button');
BTN2.setAttribute('id', 'butSel');
BTN2.value = 'SORT';
BTN3.setAttribute('type', 'button');
BTN3.setAttribute('id', 'butSreach');
BTN3.value = 'SEAR';
document.getElementById('btns1').appendChild(BTN1);
document.getElementById('btns2').appendChild(BTN2);
document.getElementById('btns3').appendChild(BTN3);
//присваиваем кнопкам события, для изменения функциональности приложения 
let divForm = document.createElement('div');     //создаем div куда поместим форму для нового сотрудника при нажатии кнопки BTN1
let divSel = document.createElement('div');      //создаем div куда поместим select для сортировки сотрудников при нажатии кнопки BTN2
let divSearch = document.createElement('div');   //создаем div куда поместим select и поле ввода для поиска сотрудника при нажатии кнопки BTN3
BTN1.addEventListener('click', function() {
	const elem = document.getElementById('btns1');
	const myForm = elem.getElementsByTagName('form');
	console.log(myForm, '!');
	if (myForm.length){
		//myForm[0].remove();
		divForm.innerHTML = '';
	}else {
		divForm.innerHTML = '';
		divSel.innerHTML = '';
		divSearch.innerHTML = '';
		let formNewEmpl = empls[0].createFormFoNewEmpl();
		elem.innerHTML = '';
		elem.appendChild(BTN1);
		elem.appendChild(divForm);
		divForm.appendChild(formNewEmpl); //добавляем форму с полями для ввода нового сотрудника в div divForm
		divForm.appendChild(createButton (empls)); //создаем и добавляем кнопку, которя будет добавлять нового сотрудника
	}
});
BTN2.addEventListener('click', function() {
	divForm.innerHTML = '';
	divSel.innerHTML = '';
	divSearch.innerHTML = '';
	document.getElementById('btns2').innerHTML = '';
	document.getElementById('btns2').appendChild(BTN2);
	document.getElementById('btns2').appendChild(divSel);
	//отображаем список select для сортировки сотрудников в div divSel
	divSel.appendChild(createMySelect(empls, 'sortSelect', 'Сортировать по')); 
});
BTN3.addEventListener('click', function() {
	divForm.innerHTML = '';
	divSel.innerHTML = '';
	divSearch.innerHTML = '';
	document.getElementById('btns3').innerHTML = '';
	document.getElementById('btns3').appendChild(BTN3);
	document.getElementById('btns3').appendChild(divSearch);
	//отображаем список select для поиска сотрудников по ключам и свойствам в div divSearch
	divSearch.appendChild(createMySelect(empls, 'sreachSelect', 'Искать по'));
	let inputSearch = document.createElement('input');
	divSearch.appendChild(inputSearch);   //добавляем поле input для поиска сотрудников
});

//**********__________**********----------*****_____Spero dum vivo_____*****----------**********__________**********\\

/*1. В div для фильтров и сортировки добавить один и тот же class. Создание div 
переместить в function onclick. В начале обработки нужно выбрать ввыбрать все эл-ты с 
заданным klass и все очистить, кроме текущего.
*/