define (function(){

		var articles = [{number: 1, image: 'img/hello.jpg', title: 'Hello', author: 'Smith', date: '2015', rate: '3.2'},
								{number: 3, image: 'img/help.jpg', title: 'Help', author: 'Doodle', date: '2014', rate: '5.0'},
								{number: 10, image: 'img/news.jpg', title: 'News', author: 'Johnson', date: '2010', rate: '1.1'},
								{number: 14, image: 'img/ship.jpg', title: 'Ship', author: 'Obama',	date: '2016', rate: '4.2'},
								{number: 11, image: 'img/accident.jpg', title: 'Accident', author: 'Alex', date: '2004', rate: '3.3'},
								{number: 2, image: 'img/first.png', title: 'Firstletter', author: 'Harry', date: '2016', rate: '2.3'},
								{number: 4, image: 'img/test.jpg', title: 'Test', author: 'Emma', date: '2010', rate: '3.4'},
								{number: 5, image: 'img/foto.jpg', title: 'Foto', author: 'Colin', date: '2001', rate: '3.6'},
								{number: 6, image: 'img/biography.jpg', title: 'Biography', author: 'Jack', date: '2015', rate: '4.3'},
								{number: 7, image: 'img/travel.jpg', title: 'Travel', author: 'Linda', date: '2014', rate: '5.0'},
								{number: 8, image: 'img/book.jpg', title: 'Book', author: 'Andy', date: '2013', rate: '1.3'},
								{number: 9, image: 'img/annotations.jpg', title: 'Annotations', author: 'Oleg', date: '2011', rate: '0.3'},
								{number: 12, image: 'img/web.jpg', title: 'Webdevelop', author: 'AlexK', date: '2014', rate: '4.4'},
								{number: 13, image: 'img/front.jpg', title: 'FronEnd', author: 'Kwins', date: '2007', rate: '4.1'},
								{number: 15, image: 'img/tax.jpg', title: 'Tax', author: 'Merry', date: '2008', rate: '4.9'},
								{number: 16, image: 'img/life.jpg',	title: 'Life', author: 'Kate', date: '2009', rate: '3.1'},
								{number: 17, image: 'img/newcars.jpg', title: 'Newcars', author: 'AlexM', date: '2003', rate: '2.7'},
		];

		var headers = [{number: '№', image: 'Image', title: 'Article title', author: 'Title author', date: 'Title date', rate: 'title rating'}];

		return {
			articles: articles,
			headers: headers
		}

});
