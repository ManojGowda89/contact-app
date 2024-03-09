import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function User(){

    const [users,userfunctions] =useState([
    {
        Name :"Manoj",Email:"manoj@gmail.com",Age:20
    }   
        
    ])
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:3000/').then((result)=>userfunctions(result.data)).catch((err)=>{console.log("Error")})
    },[])

    function SubmitDelete(id){

        setLoading(true);

        setTimeout(() => {
            
                   axios.delete("http://localhost:3000/deletedata/"+id).then((result)=>console.log("Success")).catch((err)=>{console.log("Error")})
            
                   window.location.reload()
            
        }, 2000);
       
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
   <Link to="create" className="btn btn-primary">Add New</Link>

<table className="table">
<thead >
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
{
    users.map((users)=>{
        return <tr>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>{users.age}</td>
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



    )
}