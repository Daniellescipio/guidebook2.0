const client = require('./client')
const createSetting = async ({story_id, main, description, settingLocation, settingTime, tastes, smells, sights, feelings, sounds, extras})=>{
    const SQL = `
    INSERT INTO settings(story_id, main, description, settingLocation, settingTime, tastes, smells, sights, feelings, sounds, extras)
    VALUES($1,$2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
    `
    const response = await client.query(SQL, [story_id, main, description, settingLocation, settingTime, tastes, smells, sights, feelings, sounds, extras])
    return response.rows[0]
}
// select all of a stories settings
const getAllStorySettings = async (story_id)=>{
    const SQL = `
    select * from stories
    WHERE story_id=$1;
    `
    const response = await client.query(SQL, [story_id])
    return response.rows
}

//select one setting
const getASetting = async (id)=>{
    const SQL = `
    select * from settings
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const updateASetting = async ({id,main, description, settingLocation, settingTime, tastes, smells, sights, feelings, sounds, extras})=>{
    const SQL = `
    UPDATE stories
    SET main = $2, 
    description = $3, 
    settingLocation = $4, 
    settingTime = $5, 
    tastes = $6, 
    smells = $7, 
    sights = $8, 
    feelings = $9, 
    sounds = $10, 
    extras = $11
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[id,main, description, settingLocation, settingTime, tastes, smells, sights, feelings, sounds, extras])
    return response.rows[0]
}
//a user will have the ability to add a setting to another story, but this will just create a new setting with all the same properties and a new storyId

//delete a setting
const removeASetting = async (id)=>{
    const SQL = `
    DELETE FROM settings
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
