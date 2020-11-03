import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./updateApartment.css";

const UpdateApartment = (props) => {
    const [ApartmentID, setApartmentID] = useState(undefined);
    const [MyPropertyOwner, setMyPropertyOwner] = useState(undefined);
    const [Street1, setStreet1] = useState("");
    const [Street2, setStreet2] = useState("");
    const [ZipCode, setZipcode] = useState(0);
    const [City, setCity] = useState("");
    const [MonthlyPrice, setMonthlyPrice] = useState(0)
    const [Available, setAvailable] = useState(true);
    const [YearBuilt, setYearBuilt] = useState(2000);
    const [CentralAC, setCentralAC] = useState(false);
    const [NumberRooms, setNumberRooms] = useState(0);
    const [NumberBathrooms, setNumberBathrooms] = useState(0);
    const [Refurbished, setRefurbished] = useState(false);
    const [PetsAllowed, setPetsAllowed] = useState(false);
    
  const handleSubmit = () => {
    if(ApartmentID === undefined){
        swal("Please enter an apartment ID number");
    }
    if(MyPropertyOwner === undefined) {
        swal("Please enter a Property owner ID");
    }
    if (City === ""){
        swal("Please Enter a city name.");
    }
    if (Street1 === ""){
        swal("Please Enter a Street address name.");
    }
    if(ZipCode > 99999 || ZipCode === 0 || ZipCode < 10000){
        swal("Please Enter a legitimate Zip Code");
      }
    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    const UpdateTenantData = new FormData();
        
    UpdateTenantData.append("street1", Street1);
    UpdateTenantData.append("street2", Street2);
    UpdateTenantData.append("zipcode", ZipCode);
    UpdateTenantData.append("city", City);
    UpdateTenantData.append("monthlyprice", MonthlyPrice);
    UpdateTenantData.append("available", Available);
    UpdateTenantData.append("yearbuilt", YearBuilt);
    UpdateTenantData.append("centralac", CentralAC);
    UpdateTenantData.append("numberrooms", NumberRooms);
    UpdateTenantData.append("numberbathrooms", NumberBathrooms);
    UpdateTenantData.append("refurbished", Refurbished);
    UpdateTenantData.append("petsallowed", PetsAllowed);

    //TODO: add appropriate url to fetch argument
    fetch(`localhost:8000/create/apartment`,{
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
        <div >
            <label className="pr-2 labels">Apartment ID#</label>
            <input type="number" onChange={(e) => setApartmentID(e.target.value)} />
            <br/>
            <h3>Enter Apartment information here</h3>
            <label className="pr-2 labels">MyPropertyOwner ID#</label>
            <input type="number" onChange={(e) => setMyPropertyOwner(e.target.value)} />
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

            <label className="pr-2 labels">Available</label>
            <input type="checkbox" onChange={(e) => setAvailable(e.target.value)} />
            <br/>

            <label className="pr-2 labels">YearBuilt</label>
            <input type="number" onChange={(e) => setYearBuilt(e.target.value)} />
            <br/>

            {/* TODO Date Available */}

            <label className="pr-2 labels">Monthly Price</label>
            <input type="number" onChange={(e) => setMonthlyPrice(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Central AC</label>
            <input type="checkbox" onChange={(e) => setCentralAC(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Number Of Rooms</label>
            <input type="number" onChange={(e) => setNumberRooms(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Number of Bathrooms</label>
            <input type="number" onChange={(e) => setNumberBathrooms(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Is this apartment Refurbished</label>
            <input type="checkbox" onChange={(e) => setRefurbished(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Are pets Allowed?</label>
            <input type="checkbox" onChange={(e) => setPetsAllowed(e.target.value)} />
            <br/>

            <Button size="lg" onClick={handleSubmit}>
                Submit
            </Button>
            
        </div>
      </div>
        
      
  )
}

export default UpdateApartment;