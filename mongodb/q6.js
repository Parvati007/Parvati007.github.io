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
    {$match:{salary:{$gt:1000}}}, //condition
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

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:['$salary',2]}
    }},
])

db.employees.aggregate([
    {$project:{name:0}},
])

db.employees.aggregate([
    {$group:{
        _id:"$department",
        total:{$sum:"$salary"}
    }}
])

db.employees.aggregate([
    {$group:{
        _id:null,
        total:{$sum:"$salary"}
    }}
])


//create new collections named orders
//_id:
//empId:
//orderValue:

db.orders.insertOne(
    {
        empId:ObjectId('685a8a5ca384c5b95c748a5f')
        ,orderValue:120
    }
)

db.orders.insertOne(
    {
        empId:ObjectId('685bb9158e58b4721e748a5f')
        ,orderValue:130
    }
)

db.orders.insertOne(
    {
        empId:ObjectId('685bb9158e58b4721e748a60')
        ,orderValue:140
    }
)

db.orders.insertOne(
    {
        empId:ObjectId('685bc9b78e58b4721e748a65')
        ,orderValue:150
    }
)

db.orders.insertOne(
    {
        empId: ObjectId('685bc9b78e58b4721e748a66')
        ,orderValue:160
    }
)

db.employees.aggregate([
    {$match:{salary:{$gt:2000}}},
    {$lookup:
    {
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders",
    }},
    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"orders.orderValue":1}},
    
])






