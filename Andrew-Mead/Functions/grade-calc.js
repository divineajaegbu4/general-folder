// Challenge area

let gradeCalc = function (score, totalScore) {
    let percent = (score / totalScore) * 100
    let letterGrade = ""
    // Conditionals goes here

    if ((percent >= 90)) {
        letterGrade = "A"
    } else if ((percent >= 80)) {
        letterGrade = "B"
    } else if ((percent <= 76)) {
        letterGrade = "C"
    } else if ((percent <= 60)) {
        letterGrade = "D"
    } else if ((percent >= 0)) {
        letterGrade = "E"
    } else {
        letterGrade = "F"
    }

    return `I got ${letterGrade}: ${percent}%`

}


// CallStack

let totalScoreCall = gradeCalc(15, 20)

console.log(totalScoreCall)