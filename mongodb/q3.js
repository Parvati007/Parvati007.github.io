db.employees.find()
db.employees.find().skip(1)
db.employees.find().limit(1)
db.employees.find().skip(1).limit(1)
db.employees.find({department:"IT"})

db.employees.find(
    {department:{$eq:"IT"}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$gt:3000}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$gte:3000}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lt:3000}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lte:3000}},
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {salary:{$lte:3000},department:"IT"}, //by default AND operator
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$and:[{salary:{$lte:3000}},{department:"IT"}]},  //and
    {_id:0,name:1,salary:1}
)

db.employees.find(
    {$or:[{salary:{$lte:3000}},{department:"IT"}]},   //or
    {_id:0,name:1,salary:1}
)

db.employees.find({department:{$eq:"IT"}})   //equal to
db.employees.find({department:{$ne:"IT"}})   //not equal to

