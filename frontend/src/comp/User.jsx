import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link , useParams } from "react-router-dom"

export default function User(){
    const {id} =useParams();
    console.log(id)

    const [users,userfunctions] =useState([
    {
      _id:1,  name :"Manoj",email:"manoj@gmail.com",mobile :4949999999999,designation:"Hr",gender :"Male",course:"MCA",date :"2017"
    }   
        
    ])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      const login =localStorage.getItem("isLogin")
      console.log(login)
          if(!login){
              window.location.href = "http://localhost:5173"
          }
      })
    useEffect(()=>{
        axios.get('http://localhost:3000/').then((result)=>userfunctions(result.data)).catch((err)=>{console.log("Error")})
    },[])

    function SubmitDelete(id){

        setLoading(true);
       
        axios.delete("http://localhost:3000/deletedata/"+id).then((result)=>console.log("Success")).catch((err)=>{console.log("Error")})
            
        setTimeout(() => {
            
        window.location.reload()
            
        }, 2000);
       
    }
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor:"#0D6EFD"// Set the height of the container to the full viewport height
      };
    
    if(loading){
         
       return <div style={styles}>  
           <center><div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></center>
       </div>
    }
    
   
    
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin Pannel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/user">Home</a>
        </li>
        <li className="nav-item">
        <Link className="nav-link" onClick={()=>{
            localStorage.clear();
          }} href="/">Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

   <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
   <div className="w-60 bg-white rounded p-3">
   <h1 className="text-center mb-4">Admin Panel</h1>
   <Link to="/create" className="btn btn-primary">Add New</Link>

<table className="table">
<thead >
<tr>
                <th>Id</th>
                
                <th>First Name</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Company</th>
                <th>Jobtitle</th>
              </tr>
</thead>
<tbody>
{
    users.map((users)=>{
        return <tr>
            <td>{users._id}</td>
            <td>{users.firstname}</td>
            <td>{users.lastname}</td>
            <td>{users.email}</td>
            <td>{users.phonenumber}</td>
            <td>{users.company}</td>
            <td>{users.jobtitle}</td>
            <td>
            <Link to={`/update/${users._id}`} className="btn btn-primary">Update</Link>
             &nbsp;
            <button onClick={(e)=>{SubmitDelete(users._id)}} className="btn btn-primary">Delete</button>
            </td>
        </tr>
    })
}


</tbody>

</table>

   </div>

   </div>

</div>

    )
}
