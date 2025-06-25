db.employees.insertMany([
    {
    name:"Amy",
    email:"amy@gmail.com",
    department:"HR",
    salary:2000,
    location:["NY","TX"],
    date:Date(),
   
}])

db.employees.insertMany([{
    name:"Rafeal",
    email:"rafeal@gmail.com",
    department: "Admin",
    salary: 1500 ,
    location:["OH","TX"],
    date:Date(),

}])

db.employees.find({department:{$in:["Admin","HR"]}})  //IN operator
db.employees.find({department:{$nin:["Admin","HR"]}}) //NOT IN operstor 
