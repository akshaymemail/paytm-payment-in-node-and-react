import express from 'express'

// express app 
const app = express()

// root route 
app.get('/', (req, res) => {
    res.json({message : "Server is running"})
})

// listening the server
app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running at port 5000')
})