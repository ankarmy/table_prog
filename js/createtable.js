define (function(){

  function showHeader(arr){			//вывод хедера таблицы
  	for (var j = 0; j < arr.length; j++){
  		var tableHeaderRow = document.createElement('div');
  		tableHeaderRow.className = "tableRow";
  		contentTable.appendChild(tableHeaderRow);
  		getClick(tableHeaderRow);

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


  return showHeader;  

});
