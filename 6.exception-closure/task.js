function parseCount(value){
	let result = Number.parseInt(value);
	if (Number.isNaN(result)){
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(item){
	try {
		result = parseCount(item);
	} catch (err){
		result = new Error("Невалидное значение");
	}
	return result;
}


//Задача 2

class Triangle {
	constructor(a, b, c){
		this.a = a;
		this.b = b;
		this.c = c;
		if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	getPerimeter(){ 
		return this.p = this.a + this.b + this.c;
	}

	getArea(){
		this.pp = this.p / 2;
		this.s = Math.sqrt(this.pp * (this.pp - this.a) * (this.pp - this.b) * (this.pp - this.c));
		return this.s.toFixed(3);
	}

}


function getTriangle(a, b, c){
	try {
		let q = new Triangle(a, b, c);
	} catch (err){
		

		
	}
	return q;
}