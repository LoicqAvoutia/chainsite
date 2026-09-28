import 'dotenv/config';

//SERVER_PORT
const serverportstr = process.env.SERVER_PORT;
if(serverportstr===null || serverportstr===undefined){
    console.error('porta assente')
}
const serverport = Number(serverportstr);
if(isNaN(serverport)){
    console.error('porta non valida')
}

//DB_HOST
const host = process.env.DB_HOST;
if(host === null || host === undefined || host ===''){
    console.error('host assente')
}

//DB_USER
const user = process.env.DB_USER;
if(user === null || user === undefined || user ===''){
    console.error('user assente')
}

//DB_PASSWORD
const password = process.env.DB_PASSWORD;
if(password === null || password === undefined || password ===''){
    console.error('password assente')
}

//DB_DATABASE
const db = process.env.DB_DATABASE;
if(db === null || db === undefined || db ===''){
    console.error('database assente')
}

export const varambient = {
    'SERVER_PORT':serverport,
    'DB_HOST': host,
    'DB_USER': user,
    'DB_PASSWORD': password,
    'DB_DATABASE': db
}
