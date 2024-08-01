import Database  from "better-sqlite3";
import { InputUser, IUser } from "./types";
const db = new Database('social.db')

export const addUser = (user:InputUser):Database.RunResult => {
    return db.prepare(`
        INSERT INTO users(name, surname, salary)
        VALUES(@name, @surname, @salary)
    `).run(user)
}

export const getAllUsers = ():IUser[] => {
    return db.prepare(`SELECT * FROM users`).all() as IUser[]
}

export const getUserById = (id:string):Partial<IUser> => {
    return db.prepare(`
        SELECT * FROM users WHERE=?
        `).get(id) as Partial<IUser>
}

export const updateUser = (user:IUser):Partial<IUser> =>{
    return db.prepare(`
        UPDATE users
        SET name = ?, surname = ?, salary = ?
        WHERE id = ? 
        `).run(user) as Partial<IUser>
}
