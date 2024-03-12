//imports
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const UserModel = require('./models/Users')
// data base connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud')




// use
app.use(cors());
app.use(express.json());



app.get("/getdata/:id",(req,res) => {
  const id = req.params.id;
 UserModel.findById({_id:id}).then(users=> res.json(users)).catch((err)=> console.log(err));


})
app.put("/updatedata/:id", (req, res) =>{
    const id = req.params.id;
     UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,mobileNo:req.body.mobileNo,designation:req.body.designation,selectedGender:req.body.selectedGender,course:req.body.course,createDate:req.body.createDate}).then(result=> res.json(result)).catch((err)=> console.log(err));

})
app.delete('/deletedata/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id}).then(result=> res.json(result)).catch((err)=> console.log(err))

})

app.get('/', (req, res) => {

    UserModel.find({}).then((users) => res.json(users)).catch((err)=>res.json(err))
})
app.post("/createuser",(req,res) => {
    UserModel.create(req.body).then(users=>res.json()).catch((err)=>res.json(err))
})

// {
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "password": "password123"
// }













//lesson server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});