const { Router } = require("express");
const User = require("../models/todos.model");
const router = Router();

router.get("/api/v1/todos", async (req,res) =>{
try{
const todos = await User.findAll({
    attributes: ["id","title", "status"]
});
res.json(todos);
}catch (error){
res.status(400).json(error);
}
});
router.post("/api/v1/todos", async (req, res)=>{
    try{
        const newhomework = req.body;
        console.log(newhomework);
        const resut = await User.create(newhomework);
        res.status(201).send(result);
    }catch(error){
        res.status(400).json(error);
    }
});

router.put("/api/v1/todos/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const data = req.body;
        const result = await User.update(data,{
            where:{id}
        });
        res.status(400).send()
    }catch (error){
        res.status(400).json(error);
    }
});
router.delete("/api/v1/todos/:id", async (req,res) =>{
    try{
        const { id } = req.params;
        const result = await User.destroy({
            where :{id} 
        });
        res.status(204).send();
    } catch (error){
        res.status(400).json(error);
    }
});

module.exports = router;