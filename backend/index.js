//imports
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const connectDB=require("mb64-connect")




// use
app.use(cors());
app.use(express.json());

connectDB("mongodb+srv://harirajh076:w4GAwJYtmgEsqsFM@cluster0.3wrkq.mongodb.net/contact")





const UserModel = connectDB.validation("contact",{
 
    firstname:String,
    lastname:String,
    email:String,
    phonenumber:String,
    company:String,
    jobtitle:String

})


app.get("/getdata/:id",(req,res) => {
  const id = req.params.id;
 UserModel.findById({_id:id}).then(users=> res.json(users)).catch((err)=> console.log(err));


})
app.put("/updatedata/:id", (req, res) =>{
    const id = req.params.id;
    console.log(req.body)
     UserModel.findByIdAndUpdate({_id:id},{firstname:req.body.firstname,lastname:req.body.lastname,email:req.body.email,phonenumber:req.body.phonenumber,company:req.body.company,jobtitle:req.body.jobtitle}).then(result=> res.json(result)).catch((err)=> console.log(err));

})
app.delete('/deletedata/:id', (req, res) => {
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id}).then(result=> res.json(result)).catch((err)=> console.log(err))

})

app.get('/', (req, res) => {

    UserModel.find({}).then((users) => res.json(users)).catch((err)=>res.json(err))
})
app.post("/createuser",(req,res) => {
    console.log(req.body)
    UserModel.create(req.body).then(users=>res.json()).catch((err)=>res.json(err))
})











//lesson server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});