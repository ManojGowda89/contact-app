
import React, { useEffect, useState } from "react"
import {Navigate, useParams} from "react-router-dom";
import axios from "axios"
export default function Update(){

    const {id}=useParams()
  
  
    const [name, setName] = useState();
const[email,setEmail]=useState();
const [age,setAge]= useState();
const [loading, setLoading] = useState(false);

    
    

 useEffect(()=>{
     

       axios.get("http://localhost:3000/getdata/"+id).then(result=>{
        setName(result.data.name)
        setEmail(result.data.email)
        setAge(String(result.data.age))
        console.log(result.data)
           }).catch((error)=>{console.log(error)}) 
     


 },[])


function SubmitHandler(e){
    e.preventDefault()

   
    setLoading(true)

    setTimeout(() => {
        
        axios.put("http://localhost:3000/updatedata/"+id,{name,email,age}).then(result=>console.log(result)).catch((err)=> console.log(err))
        
        window.location.href="http://localhost:5173/"
      
    }, 1000);
}
const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Set the height of the container to the full viewport height
  };

if(loading){
     
   return <div style={styles}>  
       <center><div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div></center>
   </div>
}

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">

        <h1 className="text-center mb-4">Create New User</h1>
            <form onSubmit={SubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter your name"  value={name} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required/> 
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Age</label>
                    <input type="number" className="form-control" id="number" placeholder="Enter your Age" value={age} onChange={(e)=>setAge(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    </div>


    )
}