import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import "./CreateContractAgreement.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateContractAgreement = (props) => {
    const [ContractID, setContractID] = useState(undefined);
    const [TenantID, setTenantID] = useState(undefined);
    

  const handleSubmit = async () => {
  if(ContractID === undefined) {
    swal("Please enter a legitimate Contract ID")
    return;
  }
  if(TenantID === undefined) {
    swal("Please enter a legitimate Tenant ID")
    return;
  }
    
    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    const ContractAgreementData = new FormData();
        
    ContractAgreementData.append("contractid", ContractID);
    ContractAgreementData.append("tenantid", TenantID);

    //TODO: add appropriate url to fetch argument
    await fetch(`localhost:8000/create/ContractAgreement`,{
        method: "POST",
        body: ContractAgreementData,
    })
      .then((response) => {
        if (response === 200){swal("Contract Agreement created!")}
      })
      .catch((error) => {});
  }

  return(
      <div className="centerDiv">
        <div >
            <h3>Enter Contract Agreement information here</h3>
            <label className="pr-2 labels">Contract ID#</label>
            <input type="number" onChange={(e) => setContractID(e.target.value)} />
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

export default CreateContractAgreement;