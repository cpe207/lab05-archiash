interface Student{
  name: string;
  score: number;
}

function findTopNames(students:Student[]) {
  return students.filter(student => {return student.score > 8}).map(student => {return student.name});
}

const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
