// function IsValidId(req, _res, next) {
//   const { id } = req.params;

//   if (isNaN(id)) throw new Error('id not number');
//   if (id <= 0) throw new Error(' id <= 0');
//   next();
// }

// function IsValidUser(req, _res, next) {
//   const { name, surname, email, pwd } = req.body;

//   if (!isNaN(name)) throw new Error('name not string');
//   if (!isNaN(surname)) throw new Error('surname not string');
//   if (!/^[\w]+@[\w]+\.[a-z]{2,5}/gm.test(email)) throw new Error('email not valid');
//   if (!/^\w{8,}$/gm.test(pwd)) throw new Error('password not valid');

//   next();
// }

// export = { IsValidUser, IsValidId };
