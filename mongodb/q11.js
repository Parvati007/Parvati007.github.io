//Sharding

//Sharding in MongoDB is a method used to distribute data across multiple servers (or shards) to support 
//horizontal scaling, especially when dealing with large data sets that exceed the capacity of a single 
//server.

//Why Sharding?
// To handle very large datasets

// To improve read/write performance

// To avoid storage and memory limits of a single server

//------------------------------------------------27050--------------------------------------------------
//---------------------cf--------------------------------------------------------------------------------
//----------------primary--27018------------------------------------------secondary---27019--------------
//-------rs1------------------------------------------------------------rs2------------------------------
//---primary--27020---secondary--27021----------------------------primary--27022-----secondary--27023

//-------------------------------------------------------------------------------------------------------
// Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
// Start Config servers on separate tabs of command prompt
// mongod --configsvr --port 27018 --replSet cf --dbpath d:\dbshards\conf
// mongod --configsvr --port 27019 --replSet cf --dbpath d:\dbshards\rconf
// Open new tab and Initiate replica set for config servers
// mongosh --port 27018
// rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})
//rs.config()
//rs.status()

///////////////////////////////////////////////////////////////////////////////////////////////////////
// Start Shard1 servers on separate tabs of command prompt
// mongod --shardsvr --port 27020 --replSet rs1 --dbpath d:\dbshards\s1
// mongod --shardsvr --port 27021 --replSet rs1 --dbpath d:\dbshards\s1r
// Open new tab and Initiate replica set for shard1 servers
// mongosh --port 27020
// rs.initiate({_id:'rs1',members:[{_id:0,host:'localhost:27020'},{_id:1,host:'localhost:27021'}]})
//rs.config()
//rs.status()

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start Shard2 servers on separate tabs of command prompt
// mongod --shardsvr --port 27022 --replSet rs2 --dbpath d:\dbshards\s2
// mongod --shardsvr --port 27023 --replSet rs2 --dbpath d:\dbshards\s2r
// Open new tab and Initiate replica set for shard2 servers
// mongosh --port 27022
// rs.initiate({_id:'rs2',members:[{_id:0,host:'localhost:27022'},{_id:1,host:'localhost:27023'}]})
//rs.config()
//rs.status()

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Start Mongo Routing Service on separate tab of command prompt
// mongos  --configdb cf/localhost:27018,localhost:27019 --port 27050
// mongosh --port27050
// sh.addShard("rs1/localhost:27020,localhost:27021")
// sh.addShard("rs2/localhost:27022,localhost:27023")
// sh.status()
// use mydatabase
// show dbs
// sh.enableSharding("mydatabase")
// sh.shardCollection("mydatabase.customers", { _id: 1 })
// sh.status()
// sh.getShardedDataDistribution() //run this after executing below nodejs scripts