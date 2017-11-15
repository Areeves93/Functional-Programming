var students=[
{name:'Sally Smith', score:76},
{name:'Taylor Brown', score:94},
{name:'Alex Santana', score:88},
]

class FinalExam{
constructor(students){
this.students=students
this.extraCredit= this.giveExtraCredit(this.students)
this.passed=this.getPasses(this.afterExtraCredit)
this.average=this.getAverage(this.afterExtraCredit)
}

giveExtraCredit(students){
return students.map((student)=>{
return student.score +15
})
}
getPasses(students){
return students.filter((student)=>{
if(student.score>59)
return student
console.log(getPasses(students))
})
}
getAverage(students){
let count=0
let stopper=students.length
return students.reduce(function(acc,curr){
count++
if(count=== stopper){
return (acc+curr)/stopper
}
if(count !== stopper){
return (acc+curr)
}
})
}
}
let finalExam= new FinalExam(students)
console.log(finalExam.giveExtraCredit(students))
