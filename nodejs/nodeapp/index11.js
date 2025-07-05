//environment variables
//encodeURIcomponent is used to handle special characters in the database credentials
import dotenv from 'dotenv';
dotenv.config();
const dbuser = encodeURIcomponent(process.env.DBUSER);
const dbpass = encodeURIcomponent(process.env.DBPASS);
console.log(dbuser);
console.log(dbpass);