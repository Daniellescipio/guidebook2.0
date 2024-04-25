const client = require('./client')
const bcrypt = require('bcrypt')
//const {faker} = require('@faker-js/faker')


const createTables = async ()=>{
    const SQL=`
    
DROP TABLE IF EXISTS characterqualities CASCADE;
DROP TABLE IF EXISTS charactertypes CASCADE;
DROP TABLE IF EXISTS conflicttypes CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS stories CASCADE;
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS plots CASCADE;
DROP TABLE IF EXISTS settings CASCADE;
DROP TABLE IF EXISTS climaxes CASCADE;
DROP TABLE IF EXISTS conflicts CASCADE;

CREATE TABLE characterqualities
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    quality varchar(600) NOT NULL
);
CREATE TABLE charactertypes
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name varchar(600) NOT NULL
);

CREATE TABLE conflicttypes
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    name varchar(500) NOT NULL
);

CREATE TABLE users
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    firstname varchar(255) NOT NULL,
    lastname varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    admin boolean DEFAULT false,
    created_at_date timestamp without time zone DEFAULT CURRENT_DATE,
    last_login timestamp without time zone
);
CREATE TABLE stories
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid references users(id) NOT NULL,
    title varchar(255) NOT NULL,
    synopsis text
);

CREATE TABLE characters
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    story_id uuid references stories(id) NOT NULL,
    name varchar(600)  NOT NULL DEFAULT 'new character',
    description text,
    goals text[],
    backstory text,
    traits text[],
    fatalflaw text,
    extras text[],
    type_id uuid references charactertypes(id) NOT NULL,
    quality_id uuid references characterqualities(id) NOT NULL
);
CREATE TABLE plots
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    story_id uuid references stories(id) NOT NULL,
    main boolean NOT NULL DEFAULT false,
    description text,
    risingaction text,
    fallingaction text,
    resolution text,
    extras text[]
);
CREATE TABLE settings
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    story_id uuid references stories(id) NOT NULL,
    main boolean NOT NULL DEFAULT false,
    description text,
    settinglocation text,
    settingtime text,
    tastes text[],
    smells text[],
    sights text[],
    feelings text[],
    sounds text[],
    extras text[]
);
CREATE TABLE climaxes
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    plot_id uuid references plots(id) NOT NULL,
    name varchar(600) NOT NULL DEFAULT 'my climax'::varchar,
    description text,
    events text[],
    resolution text,
    extras text[]
);
CREATE TABLE conflicts
(
    id uuid PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),
    plot_id uuid references plots(id) NOT NULL,
    name varchar(600) NOT NULL DEFAULT 'my plot'::varchar,
    description text,
    type_id uuid references conflicttypes(id) NOT NULL ,
    obstacles text,
    extras text[]
);`
    await client.query(SQL)

}

const createData = async ()=>{ 
    client.connect()
    await createTables()
}
module.exports = {createTables}
!module.parent && createData().then(()=>client.end())
