var contentTable = document.getElementById('contentTable');
var paginator = document.getElementById('paginator');
var sortParametr = {	//глобальная переменная для выбора направления сортировки
	columId: 0,
	sortSc: 0,
	sortImage: 0,
};
var itemOnPage = 5;//количество строк на странице для пагинатора
var activePageNumber = 1; //номер активной страницы;
var pageCount;
var filterButton = document.getElementById('filterButton');
var filterWordItem, filterColName; //переменные содержащие условия для фильтра

function createSelectorItems(arr){//создание селектора для фильтра
		for (var key in arr[0]){
			if ((key != "number") && (key != "image")){//исключаем фильтр по номеру и по картинке
				var selectorItem = document.createElement('option');
				selectorItem.value = key;
				selectorItem.innerHTML = arr[0][key];
				document.filterForm.filterCol.appendChild(selectorItem);
			}
		}
}



filterButton.addEventListener('click', filterTable ,false);
clearButton.addEventListener('click', clearFilter, false);




function filterTable(){//получаем значения фильрации при клике на копку фильтра
	filterWordItem = document.filterForm.filterWord.value;
	filterColName = document.filterForm.filterCol.value;
	createFilteredData(articles, filterWordItem, filterColName);//вызов фунции фильтрации
}


function clearFilter(){//функция отчистки фильра
	clearItem();
	showHeader(headers);
	showRow(articles);
	clearFooter();
	showFooter(articles);
}

function createFilteredData(arr, findItem, findKey){//функция создания отфильтрованного массива
	var filteredArticles = [];
	for(var j = 0; j <arr.length; j++){
		for (var key in arr[j]){
			if ((key == findKey) && (arr[j][key] == findItem)){
				filteredArticles.push(arr[j]);
			}
		}
	}
	clearItem();
	showHeader(headers);
	showRow(filteredArticles);
	clearFooter();
	showFooter(filteredArticles);
}







function showHeader(arr){			//вывод хедера таблицы
	for (var j = 0; j < arr.length; j++){
		var tableHeaderRow = document.createElement('div');
		tableHeaderRow.className = "tableRow";
		contentTable.appendChild(tableHeaderRow);
		tableHeaderRow.addEventListener('click', sort, false);;

			for (var key in arr[j]){
			var tableItemHeader = document.createElement('div');
			tableItemHeader.className = "tableHeader";
			if (sortParametr.columId == key) {
				tableItemHeader.innerHTML = arr[j][key] + " " +sortParametr.sortImage;
			}else{
			tableItemHeader.innerHTML = arr[j][key];
			}
			tableItemHeader.id = key;
			tableHeaderRow.appendChild(tableItemHeader);
			}
	}
}





function pageShow(e){ //функция показа страницы таблицы
	if (e.target.id == "<") {
		if(activePageNumber != 1){
			activePageNumber--;
		}
	}else if (e.target.id == ">") {
		if(activePageNumber != pageCount){
			activePageNumber++;
		}
	}else {
	activePageNumber = e.target.id;

	}
	for(var i=0; i < paginator.children.length; i++){
		paginator.children[i].className = "pageItem";
		paginator.children[activePageNumber].className = "selectedPageItem";
	}

	clearItem();
	showHeader(headers);
	showRow(articles);

}



function showRow(arr){ //функция вывода строк таблицы
	var x = (activePageNumber-1)*itemOnPage;
	var y = activePageNumber*itemOnPage-1;

	for (var j = x; j <= y; j++){
		var tableRow = document.createElement('div');
		tableRow.className = "tableRow";
		contentTable.appendChild(tableRow);
			for (var key in arr[j]){
				if (key == "image"){  //проверка для вывода ячейки с картинкой
					var tableItemImage = document.createElement('img');
					tableItemImage.src = arr[j][key];
					tableItemImage.className = "tableItemImage";
					tableRow.appendChild(tableItemImage);
				}else{
					var tableItem = document.createElement('div');
					tableItem.className = "tableItem";
					tableItem.innerHTML = arr[j][key];
					tableRow.appendChild(tableItem);
				}
			}
		}
}



function showFooter(arr) {//функция создания пагинатора
	pageCount = Math.ceil(arr.length/itemOnPage);
	for (var i = 0; i <= (pageCount+1); i++) {
		if (i == 0) {
			var pageItem = document.createElement('div');
			pageItem.className = "pageItem";
			pageItem.innerHTML = "<";
			pageItem.id = "<";
			paginator.appendChild(pageItem);
			pageItem.addEventListener('click', pageShow, false);
		}else if (i == (pageCount+1)) {
			var pageItem = document.createElement('div');
			pageItem.className = "pageItem";
			pageItem.innerHTML = ">";
			pageItem.id = ">";
			paginator.appendChild(pageItem);
			pageItem.addEventListener('click', pageShow, false);
		}else  {
			var pageItem = document.createElement('div');
			if (i == 1){
				pageItem.className = "selectedPageItem";
			}else{
				pageItem.className = "pageItem";
			}
			pageItem.innerHTML = i;
			pageItem.id = i;
			paginator.appendChild(pageItem);
			pageItem.addEventListener('click', pageShow, false);
		}
	}
}


createSelectorItems(headers);
showHeader(headers); //рисуем таблицу
showRow(articles);
showFooter(articles);

asc = function (field) { // функция для сортировки по возрастанию
			return function (x, y) {
    if (x[field] > y[field])
        return 1;
    else if (x[field] < y[field])
        return -1;
    else
        return 0;
			}
};

desc = function (field) { // функция для сортировки по убыванию
			return function (x, y) {
		if (x[field] > y[field])
				return -1;
		else if (x[field] < y[field])
				return 1;
		else
				return 0;
			}
};

function sort(el){	//функция вызываемая по клику для сортироки
	var elem = el.target.id;

	if ((sortParametr.sortSc == "asc") && (sortParametr.columId == elem)) {  //проверка глобальной переменной, если кликаем второй раз в то же поле, то меняется направление сортироки
			articles.sort(desc(elem));
			sortParametr.columId = elem;
			sortParametr.sortSc = "desc";
			sortParametr.sortImage = '<img src="img/downrow.png" class="sortIcon">';
		}else{
			articles.sort(asc(elem));
			sortParametr.columId = elem;
			sortParametr.sortSc = "asc";
			sortParametr.sortImage = '<img src="img/uprow.png" class="sortIcon">';
	}

	clearItem();			//очищаем таблицу для вывода отсортированной
	showHeader(headers);
	showRow(articles);		//выводим отсортированную таблицу
}


function clearItem(){	//функция отчистки таблицы
	for (var i = contentTable.children.length-1; i > -1 ; i--) {
		contentTable.removeChild(contentTable.children[i]);
	}
}

function clearFooter(){
	paginator.innerHTML = "";
}
