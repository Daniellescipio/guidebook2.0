const client = require('./client')
const createConflict = async ({plot_id, name, description, type_id, obstacles, extras})=>{
    const SQL = `
    INSERT INTO settings(plot_id, name, description, type_id, obstacles, extras)
    VALUES($1,$2, $3, $4, $5, $6)
    RETURNING *;
    `
    const response = await client.query(SQL, [plot_id, name, description, type_id, obstacles, extras])
    return response.rows[0]
}
// select all of a plots conflicts
const getAllPlotConflicts = async (plot_id)=>{
    const SQL = `
    select * from conflicts
    WHERE plot_id=$1;
    `
    const response = await client.query(SQL, [plot_id])
    return response.rows
}


//select one setting
const getAConflict = async (id)=>{
    const SQL = `
    select * from conflicts
    where id = $1;
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}
const updateAConflict = async ({id, name, description, type_id, obstacles, extras})=>{
    const SQL = `
    UPDATE conflicts
    SET name = $2,
    description = $3,
    type_id = $4,
    obstacles = $5,
    extras = $6
    WHERE id = $1
    RETURNING *;
    `
    const response = await client.query(SQL,[id, name, description, type_id, obstacles, extras])
    return response.rows[0]
}
//a user will have the ability to add a conflict to another plot, but this will just create a new setting with all the same properties and a new storyId

//delete a setting
const removeAConflict = async (id)=>{
    const SQL = `
    DELETE FROM conflicts
    WHERE id = $1
    `
    const response = await client.query(SQL, [id])
    return response.rows[0]
}