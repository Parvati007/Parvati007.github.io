//Regular Expression
db.employees.find({name:{$regex:"a"}});//all words having "a"

db.employees.find({name:{$regex:"Cath G"}});//Cath G will come

db.employees.find({name:{$regex:"cath G",$options:"i"}});//i..case insensitive

db.employees.find({name:{$regex:"^c",$options:"i"}});//start with c

db.employees.find({name:{$regex:"g$",$options:"i"}});//end with g