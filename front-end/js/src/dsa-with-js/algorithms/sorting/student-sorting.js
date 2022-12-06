class Student {
  #rollNo;
  #name;
  #age;

  constructor(rollNo, name, age) {
    this.#rollNo = rollNo;
    this.#name = name;
    this.#age = age;
  }

  get rollNo() {
    return this.#rollNo;
  }

  set rollNo(rollNo) {
    this.#rollNo = rollNo;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }

  static sortByRollNo(studentArr) {
    let len = studentArr.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (studentArr[j].rollNo > studentArr[j + 1].rollNo) {
          let temp = studentArr[j];
          studentArr[j] = studentArr[j + 1];
          studentArr[j + 1] = temp;
        }
      }
    }

    return studentArr;
  }

  get details() {
    return "Student: " + this.#name + " " + this.#rollNo + " " + this.#age;
  }

  printDetails() {
    console.log(
      "Student: " + this.#name + " " + this.#rollNo + " " + this.#age
    );
  }
}

let student1 = new Student(7, "ASHU", 25);
let student2 = new Student(2, "AMAN", 27);
let student3 = new Student(5, "ANSH", 20);

let students = [student1, student2, student3];

studentsSortedByRollNo = Student.sortByRollNo(students);
for (let student of studentsSortedByRollNo) {
    console.log(student.details);
}
