class Student {

  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  getGrade() {
    return this.grade;
  }
}

class Section {
  
  constructor(students) {
    this.students = students;
  }

  getStudents() {
    return this.students;
  }
}

const students = [new Student("Angelica", 75), new Student("Vivian", 90)];
const section = new Section(students);
for (const student of section.getStudents()) {
  console.log(student.name, student.getGrade());
}


