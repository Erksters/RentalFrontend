import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import "./reportQueries.css";

const ReportQueries = (props) => {
  const [PopularApartment, setPopularApartment] = useState("");
  const [AveragePrice, setAveragePrice] = useState(undefined);
  const [NumberOfReturningTenants, setNumberOfReturningTenants] = useState(undefined);
  const [returningTenantPercentage, setreturningTenantPercentage] = useState(undefined);
  const [safeContracts, setSafeContracts] = useState(undefined);
  
  useEffect(() => {
    // loadData();
    });

  const loadData = () => {
 
    //TODO: fetch it
    //TODO: add appropriate url to fetch argument
    fetch(`localhost:8000/report/queries`,{
        method: "GET"
    })
      .then((response) => {
        if (response === 200){
            //TODO: Load data
        }
      })
      .catch((error) => {swal("There was an error"); 
        console.log(error)}
        );
  }

  return(
      <div className="centerDiv">
        <div>
            <h3>Report Queries</h3>
            <label className="pr-2 labels">List of apartments that have been rented out the most by year</label>
            <br/>
            <label className="pr-2 labels">The average price for all contracts ranked by year</label>
            <br/>
            <label className="pr-2 labels">Number of Returning Tenenats</label>
            <textarea>{returningTenantPercentage}</textarea>
            <br/>
            <label className="pr-2 labels">Returning Tenant percentage</label>
            <textarea>{NumberOfReturningTenants}</textarea>
            <br/>
            <label className="pr-2 labels">Number of Occurences where the combined credit score of tenants is greater that 1400</label>
            <textarea>{safeContracts}</textarea>
            <br/>
        </div>
      </div>
        
      
  )
}

export default ReportQueries;
