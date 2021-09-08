import 'dotenv/config'
import express from "express"
import { store } from "./controllers/UserController"

const app = express()

app.use(express.json())

app.post("/users", store)


app.listen(3333, () => console.log("server running"))