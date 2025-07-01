//User Management


// use admin
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [ { role: "root", db: "admin" } ] 
})

db.getUsers()

// add following settings in mongod.conf available in program files / mongodb
// security:
//   authorization: enabled
// go to services and restart mongodb server

//mongosh --username admin --authenticationDatabase admin

//-----------------------------------------------------------
//use lpu
db.createUser({
  user: "user1",
  pwd: "1234",
  roles: [ { role: "read", db: "lpu" } ] 
})

