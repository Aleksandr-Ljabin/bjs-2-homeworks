class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type){
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix(){
		this.state = this.state * 1.5;
	}

	set state(newState) {
		if(newState < 0){
			this._state = 0;
		} else if(newState > 100){
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state(){
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type){
		super(name, releaseDate, pagesCount, state, type);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type){
		super(name, releaseDate, pagesCount, state, type);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "novel";
		
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "fantastic";
		
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state, type){
		super(author, name, releaseDate, pagesCount, state, type);
		this.type = "detective";
		
	}
}


//Задача 2

class Library {
	constructor(name, books){
		this.name = String(name);// String явно лишний?
		this.books = [];
	}
	addBook(book){
		if (book.state > 30){
			this.books.push(book);
		}
	}
	findBookBy(type, value){
		if ((this.books.find(item => item[type] == value)) === undefined){
			return null;
		}else {
		  return this.books.find(item => item[type] == value);
		}
	}

	giveBookByName(bookName){
		if ((this.books.book.name.includes(bookName)) === false){
			return null;
		}else {
			let searchBook = this.book.find(item => item[name] = bookName);
			delete this.book.find(item => item[name] = bookName);
		  	return searchBook;
		}
	} 
}


// Задача 3

class Student{
	constructor(name, gender, age){
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.subject = [];
	}

	addMark(subjectName, mark){
		this.subject = subjectName;
		this.subject.push(mark);
	}
}

