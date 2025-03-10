 function Student(name, gender, age) {
    // Ваш код

  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
  this.marks = [mark]; 
  } else {
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...rest) {
  if(this.marks === undefined){ 
  this.marks = rest; 
  } else {
      this.marks.push(...rest); 
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++){
    sum += this.marks[i];
  } 
  result = sum / this.marks.length;

  return result;
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
