
import { useState } from 'react';
import './App.css';

function App() {
  const[firstname,setfirstname]= useState("")
  const[lastname,setlastname]= useState("")
  const[Fullname,setFullname]= useState("")
  const[show,setShow]= useState("")
  const[error,seterror]= useState("")
  const nameRegex = /^[A-Za-z]+$/;
  const ShowFullName=()=>{
    if (!firstname.trim()) {
      seterror("Please fill out this field.");
      return;
    }

    if (!lastname.trim()) {
      seterror("Please fill out this field.");
      return;
    }

     if (!nameRegex.test(firstname)) {
      seterror("First name should not contain numbers or special characters");
      return;
    }

    if (!nameRegex.test(lastname)) {
      seterror("Last name should not contain numbers or special characters");
      return;
    }

    seterror("");
    setFullname(`${firstname} ${lastname}`)
    setShow(true)
  }

  return (
    <div className="App">
    <h3>Full Name Display</h3>
   <form>
  <label for="fname">First name:</label><br></br>
  <input type="text" id="fname" name="fname" value={firstname} onChange={(e)=>setfirstname(e.target.value)} /><br></br>
  <label for="lname">Last name:</label><br></br>
  <input type="text" id="lname" name="lname" value={lastname} onChange={(e)=>setlastname(e.target.value)} /><br></br>
  
</form> 
    <button onClick={ShowFullName}>Submit</button>
    {error && <p style={{ color: "red" }}>{error}</p>}
     {show && <h5>Full Name: {Fullname}</h5>}

    </div>
  );
}

export default App;
