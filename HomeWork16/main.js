function Student(firstName, lastName, birthYear, grades) {

  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
   this.grades = grades || [];

  this.attendance = new Array(25);
  this.attendanceIndex = 0;


  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };


  this.getAverageGrade = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  };

  this.present = function () {
    if (this.attendanceIndex >= 25) {
      console.log("Session limit reached");
      return;
    }
    this.attendance[this.attendanceIndex++] = true;
  };


  this.absent = function () {
    if (this.attendanceIndex >= 25) {
      console.log("Session limit reached");
      return;
    }
    this.attendance[this.attendanceIndex++] = false;
  };

  this.summary = function () {
    const avgGrade = this.getAverageGrade();
    const visited = this.attendance.filter(v => v === true).length;
    const total = this.attendanceIndex;
    const avgAttendance = total === 0 ? 0 :  visited / total;

    
    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Great job!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return "Good, but could be better";
    } else {
      return "Badly";
    }
  };
}