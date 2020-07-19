const functions = {
  gradeClassifier: (grade) => {
    // TODO: Write code here
    let letterGrade;
    switch(true){
      case grade >= 95.00 && grade <= 100:
        letterGrade = "O - Outstanding"
        break;
      case grade >=90.00 && grade < 95:
        letterGrade = "V - Very Good"
        break;
      case grade >= 85.00 && grade < 90:
        letterGrade = "G - Good"
        break;
      case grade >= 80.00 && grade < 85:
        letterGrade = "S - Satisfactory"
        break;
      case grade >= 75.00 && grade < 80:
        letterGrade = "N - Needs Improvement"
        break;
      case grade < 75.00 && grade >= 0.00:
        letterGrade = "D - Did not Meet Expectation"
        break;
      default:
        if(isNaN(grade)){
          letterGrade = "Invalid numerical input"
          break;
        }
        letterGrade = "Invalid grade"
    }
    return letterGrade;
  }
}

module.exports = functions;
