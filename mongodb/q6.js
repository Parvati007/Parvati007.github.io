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

//-------------------------------------------------
//GROUP
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

//country,name,Score
//india,krish,20
//india,krish,21
//india,krish,22
//uk,john,21
//uk,john,25
//uk,john,22

db.employees.aggregate([
    {$group:{
        _id:{country:"$country",name:"$name"},
        total:{$sum:"$score"}
    }}
])

//--------------------------------------------------

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

//create new collection empCountry containing Country

db.empCountry.insertOne(
    {
        empId:ObjectId('685a8a5ca384c5b95c748a5f')
        ,Country:"India"
    }
)

db.empCountry.insertOne(
    {
        empId:ObjectId('685bb9158e58b4721e748a5f')
        ,Country:"America"
    }
)

db.empCountry.insertOne(
    {
        empId:ObjectId('685bb9158e58b4721e748a60')
        ,Country:"Europe"
    }
)

db.empCountry.insertOne(
    {
        empId:ObjectId('685bc9b78e58b4721e748a65')
        ,Country:"Antartica"
    }
)

db.empCountry.insertOne(
    {
        empId: ObjectId('685bc9b78e58b4721e748a66')
        ,Country:"Florida"
    }
)

db.employees.aggregate([
    {$lookup:
    {
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders",
    }},

    {$lookup:
    {
        from:"empCountry",
        localField:"_id",
        foreignField:"empId",
        as:"empCountry",
    }},

    {$unwind:"$orders"},
    {$project:{name:1,salary:1,"empCountry.Country":1,"orders.orderValue":1}},
    
])

//-------------------------------------------------------------------------------
//INDEXING.....searching becomes easy
db.employees.createIndex({"email":1})   //create index
db.employees.getIndexes()               //get index
db.employees.dropIndex("email_1")       // drop index

db.employees.find({email:"john@gmail.com"}).explain("executionStats")









