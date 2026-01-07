
import { useState } from 'react';
import './App.css';

function App() {
  const[firstname,setfirstname]= useState("")
  const[lastname,setlastname]= useState("")
  const[Fullname,setFullname]= useState("")
  const[show,setShow]= useState("")
  const[error,seterror]= useState("")
  
  const ShowFullName=(e)=>{
    e.preventDefault();
    if (!firstname.trim() || !lastname.trim()) {
      setFullname(""); 
      return;
    }
     if (!firstname.trim() || !lastname.trim()) {
      setFullname("");   // ensure nothing is rendered
      return;
    }
    if (!firstname.trim()) {
      seterror("Please fill out this field.");
      return;
    }

    if (!lastname.trim()) {
      seterror("Please fill out this field.");
      return;
    }

    

    seterror("");
    setFullname(`${firstname} ${lastname}`)
    setShow(true)
  }

  return (
    <div className="App">
    <h3>Full Name Display</h3>
   <form onSubmit={ShowFullName}>
  <label for="fname">First name:</label><br></br>
  <input type="text" id="fname" name="fname" value={firstname} onChange={(e)=>setfirstname(e.target.value)} /><br></br>
  <label for="lname">Last name:</label><br></br>
  <input type="text" id="lname" name="lname" value={lastname} onChange={(e)=>setlastname(e.target.value)} /><br></br>
    <button type='submit'>Submit</button>

  
</form> 
    {error && <p style={{ color: "red" }}>{error}</p>}
     {show && <h5>Full Name: {Fullname}</h5>}

    </div>
  );
}

export default App;
