
//TODO PROVISORIO HASTA CONECTAR A LA DB
const users = [
    {
        username: "esteban",
        password: "password",
        id: "1"
    },
    {
        username: "pedro",
        password: "password1",
        id: "2"
    },
]

const get = async () => {
    console.log("get repository")
    const usersRet = users;
    console.log("users get: " +usersRet)
    return usersRet;
} 

const getById = async (userId) => {
    console.log("get repository id "+ userId)
    const userRet = users.find((u)=>u.id==userId);
    console.log("user ret: " +userRet)
    return userRet;
} 

const create = (data) => {
    users.push(data);
    return data;
} 



module.exports = {
    get,
    create,
    getById
}