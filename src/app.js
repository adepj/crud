const express = require("express");
const db = require ("./utils/database");
const Todos = require("./models/todos.model.js");
const todosRoutes = require("./routes/todos.routes");
Todos;
const PORT = 8000;

db.authenticate()
    .then(()=>{
        console.log("conexion a base de datos OK");
    })
    .catch ((error)=>{
        console.log(error);
    });
    db.sync()
    .then(()=>{
        console.log('Base de datos sincronizada')
    })
    .catch((error)=>{
        console.log(error);
    })

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/", (req, res)=>{
    res.send("bienvenido a mi servidor");
});

app.listen(PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${PORT}`)
});
