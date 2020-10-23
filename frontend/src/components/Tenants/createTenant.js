import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./createTenant.css";

const CreateTenant = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  
  const handleSubmit = () => {

    if (FirstName === "" || LastName === ""){
        swal("Please complete your name");
    }
    if(PhoneNumber > 9999999999 || PhoneNumber === 0){
      swal("Please Enter a legitimate phone number");
    }
    if(!Email.includes("@")){
      swal("Please Enter a legitimate email");
    }

    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
  }

  return(
      <div className="centerDiv">
        <div >
            <h3>Enter Tenant information here</h3>
            <label className="pr-2">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label className="pr-2">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <label className="pr-2">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label className="pr-2">Phone</label>
            <input type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
            

            <Button onClick ={handleSubmit}>
                Submit
            </Button>
        </div>
      </div>
        
      
  )
}

export default CreateTenant;