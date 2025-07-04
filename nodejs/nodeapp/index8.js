//npm i bycrypt----------------hasing and bycrypting the password

import bcrypt from "bcrypt";
// const pwd = "pass1234"
// const hashedpwd = await bycrypt.hash(pwd,10);
// console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$N1cJTLX0yUfBUJwRJrE6ROk67sckTwFOp40MCwgOkOJ8YCST9m582");
console.log(check);   //true