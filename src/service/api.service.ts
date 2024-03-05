import bcrypt from 'bcrypt';
import { createUserDB, getUserByIdDB } from '../repository/api.repository';
import { iUser } from '../interfaces/interface';

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const checkEmail: iUser[] = await getUserByIdDB(email);
  if (checkEmail.length) throw new Error('such an email already exists');

  const salt = 4;
  const hashPwd = await bcrypt.hash(pwd, salt);

  const user: iUser[] = await createUserDB(name, surname, email, hashPwd);
  if (!user.length) throw new Error('data is not saved');
  return user;
}

async function authorizUser(email: string, pwd: string): Promise<iUser[]> {
  const checkEmail: iUser[] = await getUserByIdDB(email);
  if (!checkEmail.length) throw new Error('wrong email or password');

  const isValidPwd: boolean = await bcrypt.compare(pwd, checkEmail[0].pwd);
  if (!isValidPwd) throw new Error('wrong email or password');

  return checkEmail;
}

export { createUser, authorizUser };
