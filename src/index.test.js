const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Grading', () => {
  it('When the teacher inputs a grade that is at least 95 and at most 100, then the letter grade should be O - Outstanding', () => {
    // Arrange
    const grade = 95
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("O - Outstanding")
  });
  it('When the teacher inputs a grade that is at least 90 but less than 95, then the letter grade should be V - Very Good', () => {
    // Arrange
    const grade = 91
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("V - Very Good")
  });
  it('When the teacher inputs a grade that is at least 85 but less than 90, then the letter grade should be G - Good', () => {
    // Arrange
    const grade = 88
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("G - Good")
  });
  it('When the teacher inputs a grade that is at least 80 but less than 85, then the letter grade should be S - Satisfactory', () => {
    // Arrange
    const grade = 82
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("S - Satisfactory")
  });
  it('When the teacher inputs a grade that is at least 75 but less than 80, then the letter grade should be N - Needs Improvement', () => {
    // Arrange
    const grade = 78
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("N - Needs Improvement")
  });
  it('When the teacher inputs a grade that is less than 75, then the letter grade should be D - Did not Meet Expectation', () => {
    // Arrange
    const grade = 70
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("D - Did not Meet Expectation")
  });
  it('When the teacher inputs a grade that is greater than 100, then the function should return invalid grade', () => {
    // Arrange
    const grade = 101
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("Invalid grade")
  });
  it('When the teacher inputs a grade that is less than 0, then the function should return invalid grade', () => {
    // Arrange
    const grade = -5
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("Invalid grade")
  });
  it('When the teacher inputs a non-numerical input, then the function should return invalid numerical input', () => {
    // Arrange
    const grade = "O"
    
    // Act
    const result = gradeClassifier(grade)

    // Assert
    expect(result).toMatch("Invalid numerical input")
  });
});
