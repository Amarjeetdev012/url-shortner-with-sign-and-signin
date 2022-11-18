const express = require("express")
const mongoose = require("mongoose")
const route = require("./src/routes/route")
const app = express()
const path = require("path")
const { urlencoded } = require("express")

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use("/", route)

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "index.html"))
})


mongoose.connect("mongodb+srv://amarjeet:yjvXjw7UC4A02hvf@cluster0.mkw03uy.mongodb.net/test", {
    useNewUrlParser:true
})
.then ( ()=> {
    console.log("mongodb is connected succesfully")
})
.catch( (err) => {
    console.log(`$err.message`)
})

const PORT = process.env.PORT || 5000
app.listen( PORT, () => {
    console.log(`express server is running on PORT ${PORT}`)
})