//Revision
db.employees.find(
    {salary:{$gt:3000}},
    {name:1}
).limit(2).skip(1)

db.employees.find(
    {$or:[{salary:{$gt:3000}},{department:"IT"}]},
    {_id:0,name:1}
)

//Aggregation pipeline

db.employees.countDocuments()

db.employees.aggregate([
    {$match:{salary:{$gt:1000}}},
    {$project:{name:1,salary:1,location:1}},
    {$sort:{name:1}},
    {$limit:1}
])

db.employees.updateMany(
    {},
    {$addToSet:{location:"FL"}}
)

db.employees.aggregate([
    {$project:{_id:0,name:1,location:1}},
    {$unwind:"$location"},  //display in diff line
    
])

db.employees.aggregate([
    {$project:{_id:0,Empname:"$name"}},
])

