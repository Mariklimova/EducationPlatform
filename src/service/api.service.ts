import { createUserApiDB, getUserByIdDB } from '../repository/api.repository'
import { iUser } from '../interfaces/interface';


async function createUserApi(name: string, surname:string, email: string, pwd:string):Promise<iUser[]> {
    const checkEmail:iUser[] = await getUserByIdDB(email);
    if(checkEmail.length) throw new Error('such an email already exists')
   
    const user:iUser[] = await createUserApiDB(name, surname, email, pwd);
    if(!user.length) throw new Error('data is not saved')
    return user
}

async function authorizUser(email:string):Promise<iUser[]> {
    const checkEmail:iUser[] = await getUserByIdDB(email);
    if(!checkEmail.length) throw new Error('wrong email or password')
    return checkEmail
}




export { createUserApi, authorizUser };