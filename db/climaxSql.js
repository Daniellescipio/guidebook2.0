const client = require('./client')

const createClimax = async ({plot_id, name, description, events, resolution, extras})=>{
    const SQL = `
    INSERT INTO settings(plot_id, name, description, events, resolution, extras)
    VALUES($1,$2, $3, $4, $5, $6)
    RETURNING *;
    `
    const response = await client.query(SQL, [plot_id, name, description, events, resolution, extras])
    return response.rows[0]
}
// select all of a plots climaxes
const getAllPlotClimaxes = async (plot_id)=>{
    const SQL = `
    select * from climaxes
    WHERE plot_id=$1;
    `
    const response = await client.query(SQL, [plot_id])
    return response.rows
}

//select one setting
const getAClimax = async (id)=>{
    const SQL = `
    select * from climaxes
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const updateAClimax = async ({id, name, description, events, resolution, extras})=>{
    const SQL = `
    UPDATE climaxes
    SET name = $2,
    description = $3,
    events = $4,
    resolution = $5,
    extras = $6
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[id, name, description, events, resolution, extras])
    return response.rows[0]
}
//a user will have the ability to add a conflict to another plot, but this will just create a new setting with all the same properties and a new storyId

//delete a setting
const removeAClimax = async (id)=>{
    const SQL = `
    DELETE FROM climaxes
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
