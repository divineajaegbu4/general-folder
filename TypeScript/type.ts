type student = {name: string};

function access (studentRec: student): string {
   return studentRec.name;
}

var firstStudent: student = {name: "Frank"};
var firstStudentName: string = access(firstStudent)