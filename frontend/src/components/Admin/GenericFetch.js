import React, { useEffect, useState } from "react";
import swal from "sweetalert"
import "./genericFetch.css";

const GenericFetch = (props) => {
    const [NumberOfTenants, setNumberOfTenants] = useState(undefined);
    const [NumberOfApartments, setNumberOfApartments] = useState(undefined);
    const [NumberOfContracts, setNumberOfContracts] = useState(undefined);
    const [NumberOfContractAgreements, setNumberOfContractAgreements] = useState(undefined);
    const [NumberOfPropertyOwners, setNumberOfTenantsPropertyOwners] = useState(undefined);
        
    
    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    
    //TODO: add appropriate url to fetch argument, Load Data
    useEffect(() => {
        loadData();
    });
    
  const loadData = async () => {
    await fetch(`localhost:8000/generic/fetch`,{
        method: "GET",
    })
      .then((response) => {
        if (response === 200){

        }
      })
      .catch((error) => {});
  }

  if(NumberOfTenants === undefined ||
    NumberOfPropertyOwners === undefined ||
    NumberOfApartments === undefined ||
    NumberOfContracts === undefined ||
    NumberOfContractAgreements === undefined     
    ){
        return <> </>;
    
    }
  return(
      <div className="centerDiv">
        <div>
            <h3>Generics</h3>
            <label className="pr-2 labels">Number Of Property Owners</label>
            <label>{NumberOfPropertyOwners}</label>
            <br/>

            <label className="pr-2 labels">Number Of Tenants</label>
            <label>{NumberOfTenants}</label>
            <br/>

            <label className="pr-2 labels">Number Of Apartments</label>
            <label>{NumberOfApartments}</label>
            <br/>

            <label className="pr-2 labels">Number Of Contracts</label>
            <label>{NumberOfContracts}</label>
            <br/>

            <label className="pr-2 labels">Number Of Contract Agreements</label>
            <label>{NumberOfContractAgreements}</label>
            <br/>
            
        </div>
      </div>
        
      
  )
}

export default GenericFetch;