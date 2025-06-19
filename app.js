const express = require('express')
const app = express()
const db = require('./database/connection')

//logic to fetch books to database
app.get("/books",(req,res)=>{
    res.json({
        "message":"Book fetched successfully",
    })
})


//logic to add a book to database
app.post("/books",(req,res)=>{
    res.json({
        "message":"Book added successfully",
    })
})

//logic to update a book in database
app.patch("/books/:id",(req,res)=>{   
    res.json({
        "message":"Book updated successfully",
    })
})
//logic to delete a book from database
app.delete("/books/:id",(req,res)=>{
    res.json({
        "message":"Book deleted successfully",
    })
})


//postgresql://postgres.lvlbgzfpqzwbbmnronqu:29dipeshbook@ @aws-0-ap-south-1.pooler.supabase.com:6543/postgres
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})