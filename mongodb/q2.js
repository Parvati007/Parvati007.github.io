//CRUD OPEARTIONS

db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date:Date()
})

//db.employees.find()
//show collections
//db.employees.insertOne({})

db.employees.insertMany([
    {
    name:"Mike Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date:Date(),
   
}])

db.employees.insertMany([{
    name:"Cath G",
    email:"cathy@gmail.com",
    department: "IT",
    salary: 3456 ,
    location:["AZ","TX"],
    date:Date(),

}])

db.users.insertOne({name:"Ananta",age:20})
db.users.insertOne({name:"Harsh",age:23})
db.users.insertOne({name:"Arif",age:25})
db.users.find({},{name:1}) //projection field...1...true
db.users.find({},{_id:0,name:1})
db.users.find({},{_id:0,name:1,age:1})

db.users.drop() //to delete the database


