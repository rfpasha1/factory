//создаем таблицу на основе массива empls
//!!!!!!!!!! ВХОДНОЙ КОНТРОЛЬ ИСХОДНЫХ ДАННЫХ!!!!!!!!
function createMyTable(empls) {
	const myTable = document.createElement('table');            //создаем и возвращаем таблицу table 
	//определяем названия столбцов - ключи или свойства объектов из массива empls
	const props = empls[0].getProperties();                     //формируем массив props из ключей (названия свойств) объекта empls[0]
	console.log('props = ', props);
	myTable.appendChild(createHeaderRow(props));                //присоединяем строку tr из названий столбцов th к таблице table
	//формируем строки с данными
	empls.forEach(elem => {                  
		const myTr1 = document.createElement('tr');
		myTable.appendChild(myTr1);
		for (let x in elem) {                                   //так как каждый элемент (elem) массива empls является объектом,
			const myTd = document.createElement('td');          //то перебираем все его свойства и присваеваем каждое значение свойства объекта,
			myTr1.appendChild(myTd);                            //как значение каждой ячейки в строке
			myTd.innerHTML = elem[x];
		}
	});
	return myTable;
}
//создаем в таблице строку для названия столбцов (tr с ячейками th)
function createHeaderRow(props) {
	const myTr = document.createElement('tr');
	props.forEach(elem => {                                     //значения elem берем в массиве props и вставляем каждое значение в ячейку th
		const myTh = document.createElement('th');
		myTr.appendChild(myTh);
		myTh.innerHTML = elem;
	});
	return myTr;
}