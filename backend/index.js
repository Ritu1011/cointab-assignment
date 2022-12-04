const express=require("express")
const app=express()
const connect=require("./src/config/db")
const port=process.env.PORT || 5000;
const cors=require("cors")
app.use(cors())
// const importBrekfastData=require("./breakfast.json")
const UserController=require("./src/Controllers/userControllers")
app.use(express.json())

app.use("/user",UserController)

app.listen(port,async()=>{
    try {
        await connect();
        console.log(`listening on port ${port}`)
    } catch (error) {
        console.log({message:error.message})
    }
})