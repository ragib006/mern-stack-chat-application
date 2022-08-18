const express = require('express');
const app = express();
const dotenv  = require('dotenv');
const connectDB = require('./config/db.js')
const authRoutes = require("./routes/authRoutes")

const cloudinary = require('cloudinary')
const bodyParser = require('body-parser')


dotenv.config()

connectDB();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))



cloudinary.config({

cloud_name:process.env.CLOUD_NAME,
api_key:process.env.CLOUD_API_KEY,
api_secret:process.env.CLOUD_API_SECRET


})





app.use('/api/user',authRoutes)





//app.get('/rag',(req,res)=>{

//   res.send('Hello Ragib')

//})




const PORT = process.env.PORT || 5000

//app.listen(PORT,console.log(`Server Running On Port ${process.env.PORT}`))


app.listen(PORT,()=>{

  console.log(`Server Is Running On Port ${PORT}`)
   

})