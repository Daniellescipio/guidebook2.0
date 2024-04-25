const client = require('./client')

const createCharacter = async ({story_id, name, description, goals, backstory, traits, fatalflaw, type, quality, extras})=>{
    const SQL = `
    INSERT INTO settings(story_id, name, description, goals, backstory, traits, fatalflaw, type, quality, extras)
    VALUES($1,$2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
    `
    const response = await client.query(SQL, [story_id, name, description, goals, backstory, traits, fatalflaw, type, quality, extras])
    return response.rows[0]
}
// select all of a stories characters
const getAllStoryCharacters = async (story_id)=>{
    const SQL = `
    select * from characters
    WHERE story_id=$1;
    `
    const response = await client.query(SQL, [story_id])
    return response.rows
}

//select one character
const getACharacter = async (id)=>{
    const SQL = `
    select * from characters
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const updateACharacter = async ({id, name, description, goals, backstory, traits, fatalflaw, type, quality, extrass})=>{
    const SQL = `
    UPDATE characters
    SET name = $2,
    description = $3,
    goals = $4,
    backstory = $5,
    traits = $6,
    fatalflaw = $7,
    type = $8,
    quality = $9,
    extras = $10
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[id, name, description, goals, backstory, traits, fatalflaw, type, quality, extrass])
    return response.rows[0]
}
//a user will have the ability to add a conflict to another plot, but this will just create a new setting with all the same properties and a new storyId

//delete a setting
const removeACharacter = async (id)=>{
    const SQL = `
    DELETE FROM characters
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
