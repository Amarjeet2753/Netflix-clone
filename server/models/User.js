const mongoose = require('mongoose');

const UserSchema =mongoose.Schema({
  
    username :{type : String,required : true ,unique:true},
    email :{ type : String,required : true,unique : true},
    password :{ type : String, required : true,minLength : 8},
    // confirmPassword :{type : String,required : true, minLength : 8 }
    profilePic :{type: String, default :""},
    isAdmin :{type : Boolean ,default :false}
},

   { timestamps : true}


)

module.export = mongoose.Schema("User",UserSchema);
