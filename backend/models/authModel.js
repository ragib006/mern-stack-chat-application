
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");


const registerSchema = mongoose.Schema({   
   


     userName:{
        type:"String",
        required:true

     },

        email:{
        type:"String",
        required:true

     },

        password:{
        type:"String",
        required:true

     },


        image:{
        type:"String",
      
        default:"https://res.cloudinary.com/ragibhasan006/image/upload/v1617109096/aloiae2hbmx2bsrkhq0a.jpg"

         },
 



},{timestamps:true})


registerSchema.methods.matchPassword = async function(enterpassword){

return await bcrypt.compare(enterpassword,this.password)


}

const User = mongoose.model("User",registerSchema);

module.exports = User