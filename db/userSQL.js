const client = require('./client')
const bcrypt = require('bcrypt')



const createUser = async ({firstname, lastname, email, password, admin})=>{
    const SQL = `
        INSERT INTO users( firstname, lastname, email, password, admin)
        VALUES($1,$2, $3, $4, $5)
        RETURNING *;
    `
  const response = await client.query(SQL, [firstname, lastname, email, await bcrypt.hash(password, 5), admin])
  return response.rows[0]
}
// select all users
const getAllUsers = async ()=>{
    const SQL = `
    select * from users;
    `
    const response = await client.query(SQL)
    return response.rows
     
}

//select one user
const getAUserWithId = async (id)=>{
//    console.log(id)
    const SQL = `
    select * from users
    WHERE id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
//select one user
const getAUserwithEmail = async (email)=>{
    const SQL = `
    select * from users
    WHERE email = $1;
    `
    const response = await client.query(SQL, [email])
    return response.rows[0]
}

//stretch goal
//update one user
const updateAUser = async ({firstname, lastname,email, password, id})=>{
    const SQL = `
    UPDATE users
    SET firstname = $1, 
    lastname = $2, 
    email=$3, 
    password = $4
    WHERE id = $5;
    `
    const response = await client.query(SQL,[firstname, lastname,email, password, id])
    return response.rows[0]
}
const updatelastLogin = async (user_id)=>{
    const SQL = `
    UPDATE users
    SET  last_login = current_date
    WHERE id = $1;
    `
    const response = await client.query(SQL, [user_id])
    return response.rows[0]
}

//stretch goal
//delete a user
const removeAUser = async (id)=>{
    const SQL = `
    DELETE FROM users
    WHERE id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}


//we already have the function to add a user in seed.js
module.exports = {createUser,updatelastLogin, getAUserWithId, getAUserwithEmail, getAllUsers, updateAUser, removeAUser}
