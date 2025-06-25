db.employees.updateOne(
    {email:"mike@gmail.com"},
    {$set:{salary:3000}}
)

db.employees.updateMany(
    {},
    {$set:{points:1}} //hai toh update..nhi toh create kr dega
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}   //increment
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:3}}   
)

db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}   //decrease by 1
)

db.employees.updateOne(
    {email:"krish@gmail.com"},
    {$set:{name:"Krish",department:"HR",salary:2700}},
    {upsert:true}     //attribute...update+insert
)

db.employees.deleteOne({email:"krish@gmail.com"})
db.employees.deleteMany({department:"Admin"})

db.employees.find().sort({name:1})  //sort in ascending
db.employees.find().sort({name:-1}) //sort in descending
db.employees.find().sort({salary:-1}.limit(3))

db.employees.find({},{_id:0,Empname:"$name"})  //name ke jgh Empname likha ayega not change the database for display only

db.employees.updateMany(
    {},
    {$rename:{points:"score"}}   //rename..change in db points to score
)

db.employees.updateMany(
    {},
    {$unset:{score:""}}   //remove the score from db
)

//ARRAY queries

db.employees.updateMany(
    {},
    {$push:{points:5}}     //array with 5 is pushed
)

db.employees.updateMany(
    {},
    {$push:{points:3}}
 )

db.employees.updateMany(
    {department:"IT"},
    {$push:{points:7}}
 )

db.employees.updateMany(
    {department:"IT"},
    {$pull:{points:{$gt:3}}}   //pull....greater than 3 removed
 )

db.employees.updateMany(
    {},
    {$pull:{points:{$gt:3}}}
 )

db.employees.updateMany(
    {},
    {$addToSet:{location:'LA'}}
 )

db.employees.updateMany(
    {},
    {$pop:{location:1}}            //pop..to delete from last
 )

db.employees.updateMany(
    {},
    {$pop:{location:-1}}            //pop..to delete from start
 )







