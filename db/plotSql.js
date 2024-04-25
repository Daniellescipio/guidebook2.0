const client = require('./client')
const createPlot = async ({story_id, main, description, risingaction, fallingaction, resolution, extras})=>{
    const SQL = `
    INSERT INTO plots(story_id, main, description, risingaction, fallingaction, resolution, extras)
    VALUES($1,$2, $3, $4, $5, $6, $7)
    RETURNING *;
    `
    const response = await client.query(SQL, [story_id, main, description, risingaction, fallingaction, resolution, extras])
    return response.rows[0]
}
// select all of a stories plots
const getAllStoryPlots = async (story_id)=>{
    const SQL = `
    select * from plots
    WHERE story_id=$1;
    `
    const response = await client.query(SQL, [story_id])
    return response.rows
}

//select one setting
const getAPlot = async (id)=>{
    const SQL = `
    select * from plots
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const updateAPlot = async ({id, main, description, risingaction, fallingaction, resolution, extras})=>{
    const SQL = `
    UPDATE stories
    SET main = $2, 
    description = $3, 
    risingaction = $4,
    fallingaction = $5,
    resolution = $6,
    extras = $7
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[id, main, description, risingaction, fallingaction, resolution, extras])
    return response.rows[0]
}
//a user will have the ability to add a plot to another story, but this will just create a new setting with all the same properties and a new storyId

//delete a setting
const removeAPlot = async (id)=>{
    const SQL = `
    DELETE FROM plots
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
