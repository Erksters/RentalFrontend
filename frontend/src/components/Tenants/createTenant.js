import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./createTenant.css";

const CreateTenant = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  
  const handleSubmit = () => {

    if (FirstName === "" || LastName === ""){
        swal("Please complete your name")
    }
  }

  return(
      <div className="centerDiv">
        <div >
            <h3>Enter Your information here</h3>
            <label className="pr-2">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label className="pr-2">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <Button onClick ={handleSubmit}>
                Submit
            </Button>
        </div>
      </div>
        
      
  )
}

export default CreateTenant;