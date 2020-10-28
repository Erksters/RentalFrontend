import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./AddCreditScore.css";
import "react-datepicker/dist/react-datepicker.css";

const AddCreditScore = (props) => {
    const [CreditScore, setCreditScore] = useState(undefined);
    const [TenantID, setTenantID] = useState(undefined);
    
  const handleSubmit = async () => {
    if(CreditScore === undefined) {
        swal("Please enter a legitimate Credit Score")
        return;
    }
    if(TenantID === undefined) {
        swal("Please enter a legitimate Tenant ID")
        return;
    }
    
    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    const CreditScoreData = new FormData();
        
    CreditScoreData.append("creditscore", CreditScore);
    CreditScoreData.append("tenantid", TenantID);

    //TODO: add appropriate url to fetch argument
    await fetch(`localhost:8000/credit/score`,{
        method: "POST",
        body: CreditScoreData,
    })
      .then((response) => {
        if (response === 200){swal("Credit Score Added!")}
      })
      .catch((error) => {});
  }

  return(
      <div className="centerDiv">
        <div >
            <h3>Enter Credit Score information here</h3>
            <label className="pr-2 labels">Credit Score</label>
            <input type="number" onChange={(e) => setCreditScore(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Tenant ID#</label>
            <input type="number" onChange={(e) => setTenantID(e.target.value)} />
            <br/>
    
            <Button size="lg" onClick={handleSubmit}>
                Submit
            </Button>
            
        </div>
      </div>
  )
}

export default AddCreditScore;