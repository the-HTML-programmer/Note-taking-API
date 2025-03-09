import express from "express";
import { connectDB } from "./config/database";
import dotenv from "dotenv"
import noteRoutes from "./routes/notes"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

connectDB()
app.use('/api/notes',noteRoutes)
 app.get("/",(req,res)=>{
     res.send("Note-Taking API is running... ")
 })

app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})