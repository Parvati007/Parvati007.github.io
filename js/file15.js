//JSON
const student='{"name": "Amy", "age":21}'

const obj=JSON.parse(student)
console.log(obj.name)
console.log(JSON.stringify(obj))

