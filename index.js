const { json } = require("body-parser");
const express= require("express");

const app =express();


app.get("", (req , res)=>{
    console.log("hello")
    res.send("Hello")
})

app.get("/books", (req, res)=>{
const books = [
{
Id:"001",
Name:"Shivcharitra",
Authors:"Dr. Mohini Kadu"
},
{
Id:"002",
Name:"Agnipankh",
Authors:"A.P.J. Abdul Kalam"
},
{
Id:"003",
Name:"Swami Vivekanand",
Authors:"Rajiv Ranjan"
},
{
Id:"004",
Name:"Ratan Tata",
Authors:"Sudhir Sevekar"
}]
res.send(JSON.stringify(books))
})


app.listen(4000,()=>{
    console.log("listening on port 4000");
});