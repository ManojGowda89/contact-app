
import React,{useState} from "react"
import axios from "axios"
export default function Create(){

const [name, setName] = useState("");
const[email,setEmail]=useState("");
const [age,setAge]=useState("");
const [loading, setLoading] = useState(false);

function handelsubmit(e){
    e.preventDefault();

    setLoading(true)
    setTimeout(() => {
        axios.post('http://localhost:3000/createuser',{name,email,age}).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
       
        window.location.href="http://localhost:5173"
        
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

        <h1 className="text-center mb-4">Create New User</h1>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e)=>{
                        setName(e.target.value)
                    }} type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={(e) =>{
                        setEmail(e.target.value);
                    }} type="email" className="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Age</label>
                    <input  onchange={(e)=>{
                        setAge(e.target.value)
                    }} type="number" className="form-control" id="number" placeholder="Enter your Age" required />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    </div>

     

    )
}