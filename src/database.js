const { default: mongoose } = require('mongoose')
const mmongoose=require('mongoose')

// there are three steps to create a database connection
// first 
// creating a connection
mongoose.connect('mongodb://127.0.0.1:27017/authUser').then(()=>{
    console.log('database connected')
}).catch((err)=>console.log(err))


// second 
// create a schema
const schema = mongoose.Schema({
    uname:String,
    pass:String,
    
})

// third
// create a model 
const StudentModel=mongoose.model('Student',schema)

// export the file 
module.exports=StudentModel