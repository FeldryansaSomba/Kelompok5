const express = require('express');
const app = express();
const users = require('./users');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
//1.
app.get("/users", (req, res) =>{
    res.send(users)
})

//2.
app.get("/users/:name", async (req, res) =>{
    const requestName = req.params.name.toLowerCase();

    try{
        const userData = await users.find( e =>{
            const user = e.name.toLocaleLowerCase()
            if(user === requestName) res.json({name: e.name, id: e.id})
        }, this)        
       
        userData ? res.send(userData) : res.send({message: "Data user tidak ditemukan"})
    }
    catch(e){
        return e
    }
})

//3.
app.post("/users", (req, res)=>{
    if(req.body.name){
        const name = req.body.name;
        const newArray = [] 
        users.map(
                (res)=>{
                    newArray.push(res)
            })
        newArray.push({id:newArray.length + 1 ,name:name})
        res.send(newArray)
    }
     else if(req.body.name === undefined){
           res.send({message: "masukan data yang akan ditambahkan"})
        }
})

//4.

//5.

app.listen(3000, ()=>console.log("conection success"))