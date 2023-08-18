if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const path = require('path')
const goalRouter = require('./routes/goals')
const connectDB = require('./config/connection')
const app = express()


const PORT = process.env.PORT || 8080

// set view engine
app.set('view engine', 'ejs')
app.set("views", path.resolve(__dirname, "views"))

// static files
app.use(express.static('public'))

// routes
app.use('/', goalRouter)

const start = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();



