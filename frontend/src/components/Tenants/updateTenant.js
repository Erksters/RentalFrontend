import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./updateTenant.css";

const UpdateTenant = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [TenantID, setTenantID] = useState(undefined);

  const handleSubmit = () => {
    if (TenantID === undefined){
        swal("Please Enter a TenantID number");
    }

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
    const UpdateTenantData = new FormData();
        
    UpdateTenantData.append("firstname", FirstName);
    UpdateTenantData.append("lastname", LastName);
    UpdateTenantData.append("email", Email);
    UpdateTenantData.append("phonenumber", PhoneNumber);
    UpdateTenantData.append("tenantid", TenantID);

    //TODO: add appropriate url to fetch argument
    fetch(`localhost:8000/update/tenant`,{
        method: "POST",
        body: UpdateTenantData,
    })
      .then((response) => {
        if (response.status === 200){swal("Tenant Information Updated Successfully!")}
      })
      .catch((error) => {});
  }

  return(
      <div className="centerDiv">
        <div>
            <label className="pr-2 labels">Tenant ID#</label>
            <input type="number" onChange={(e) => setTenantID(e.target.value)} />
            <br/>
            <h3>Enter Tenant information here</h3>
            <label className="pr-2 labels">First Name</label>
            <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            <br/>
            <label className="pr-2 labels">Last Name</label>
            <input type="text" onChange={(e) => setLastName(e.target.value)} />
            <br/>
            <label className="pr-2 labels">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <br/>
            <label className="pr-2 labels">Phone</label>
            <input type="number" onChange={(e) => setPhoneNumber(e.target.value)} />
            <br/>

            <Button size="lg" onClick ={handleSubmit}>
                Submit
            </Button>
        </div>
      </div>
        
      
  )
}

export default UpdateTenant;