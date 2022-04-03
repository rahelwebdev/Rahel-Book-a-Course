
<script>
var grades = [5.5, 3.8, 5.2, 6.0, 4.2, 4.4, 4.7, 3.2, 5.2, 4.7];
var gradeIndex = 0;

function getNextGradeDecimal() {
    let grade = grades[gradeIndex];
    gradeIndex++;
    return grade;
}



let total = 0;
let gradeCounter = 1;

while (gradeCounter <= 10) {
    let grade = getNextGradeDecimal();
    total = total + grade;
    //short: total += grade;

    gradeCounter++;
}

let classAverage = total / 10;

console.log("The class average is" + classAverage + ".");
</script>