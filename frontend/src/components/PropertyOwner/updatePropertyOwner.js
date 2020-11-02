import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./updatePropertyOwner.css";

const UpdatePropertyOwner = (props) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(0);
  const [Street1, setStreet1] = useState("");
  const [Street2, setStreet2] = useState("");
  const [ZipCode, setZipcode] = useState(0);
  const [City, setCity] = useState("");
  const [PropertyOwnerID, setPropertyOwnerID] = useState(undefined);

  const handleSubmit = () => {
    if (PropertyOwnerID === undefined){
        swal("Please Enter a Property Owner ID#.");
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
    if (City === ""){
        swal("Please Enter a city name.");
    }
    if (Street1 === ""){
        swal("Please Enter a Street address name.");
    }
    if(ZipCode > 99999 || ZipCode === 0){
        swal("Please Enter a legitimate Zip Code");
      }
    //TODO: send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    const PropertyOwnerData = new FormData();
        
    PropertyOwnerData.append("propertyownerid", PropertyOwnerID);
    PropertyOwnerData.append("firstname", FirstName );
    PropertyOwnerData.append("lastname", LastName);
    PropertyOwnerData.append("email",Email );
    PropertyOwnerData.append("phonenumber",PhoneNumber );
    PropertyOwnerData.append("street1",Street1 );
    PropertyOwnerData.append("street2",Street2 );
    PropertyOwnerData.append("zipcode",ZipCode);
    PropertyOwnerData.append("city",City);
    
    //TODO: add appropriate url to fetch argument
    fetch(`localhost:8000/update/propertyowner`,{
        method: "POST",
        body: PropertyOwnerData,
    })
      .then((response) => {
        if (response === 200){swal("Contract created!")}
      })
      .catch((error) => {});
  }

  return(
      <div className="centerDiv">
        <div>
            <label className="pr-2 labels">Property Owner ID#</label>
            <input type="number" onChange={(e) => setPropertyOwnerID(e.target.value)} />
            <br/>
            <h3>Enter Property Owner information here to update</h3>
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
            <label className="pr-2 labels">Street Address</label>
            <input type="text" onChange={(e) => setStreet1(e.target.value)} />
            <br/>
            <label className="pr-2 labels">Secondary Street Address</label>
            <input type="text" onChange={(e) => setStreet2(e.target.value)} />
            <br/>
            <label className="pr-2 labels">City</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
            <br/>
            <label className="pr-2 labels">ZipCode</label>
            <input type="number" onChange={(e) => setZipcode(e.target.value)} />
            <br/>
            <Button size="lg" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
      </div>
        
      
  )
}

export default UpdatePropertyOwner;