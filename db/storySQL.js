const client = require('./client')

const createStory = async ({user_id, title, synopsis})=>{
    const SQL = `
        INSERT INTO stories(user_id, title, synopsis)
        VALUES($1,$2, $3, $4)
        RETURNING *;
    `
    const response = await client.query(SQL, [user_id, title, synopsis])
    return response.rows[0]
}
// select all of a users stories
const getAllUserStories = async (user_id)=>{
    const SQL = `
    select * from stories
    WHERE user_id=$1;
    `
    const response = await client.query(SQL, [user_id])
    return response.rows
}

//select one storie
const getAStory = async (id)=>{
    const SQL = `
    select * from stories
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}


//update one storie
const updateAStory = async ({title, synopsis})=>{
    const SQL = `
    UPDATE stories
    SET title = $2,
    synopsis = $3
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[user_id, title, synopsis])
    return response.rows[0]
}


//delete a storie
const removeAStory = async (id)=>{
    const SQL = `
    DELETE FROM stories
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}


//we already have the function to add a storie in seed.js
module.exports = {createStory, getAStory, getAllUserStories, updateAStory, removeAStory}
