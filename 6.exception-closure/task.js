function parseCount(value){
	let result = Number.parseInt(value);
	if (Number.isNaN(result)){
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(item){
	try {
		return parseCount(item);
	} catch (err){
		return err;
	  }
}


//Задача 2

class Triangle {
	constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (a + b < c || a + c < b || b + c < a){
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter(){ 
		return this.a + this.b + this.c;
	}

	getArea(){
		this.pp = this.getPerimeter() / 2;
		this.s = Number(Math.sqrt(this.pp * (this.pp - this.a) * (this.pp - this.b) * (this.pp - this.c)).toFixed(3));
		return this.s;
	}

}


function getTriangle(a, b, c){
	try {
		return new Triangle(a, b, c);
	} catch (err) {
		return new Object ({
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
	  	});
	}
	  
}

