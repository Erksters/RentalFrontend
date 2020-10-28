import React, { useState } from "react";
import swal from "sweetalert";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./CreateContract.css";
import "react-datepicker/dist/react-datepicker.css";

const CreateContract = (props) => {
    const [ApartmentID, setApartmentID] = useState(undefined);
    const [DepositAmount, setDepositAmount] = useState(0);
    const [DateSigned, setDateSigned] = useState( new Date());
    const [DateExpires, setDateExpires] = useState( new Date());
    const [DateInEffect, setDateInEffect] = useState( new Date());

  const handleSubmit = async () => {
    if(ApartmentID === undefined) {
        swal("Please enter a legitimate Apartment ID")
        return;
    }
    if( DepositAmount === 0){
        swal("Please Enter a legitimate Deposit Amount");
        return;
      }
    if(DateExpires === DateInEffect){
        swal("Please Check the dates and try again");
        return;
    }
    //send it
    //Is there a unique constraint error?
    //Did it successfully Save?
    const ContractData = new FormData();
        
    ContractData.append("apartmentid", ApartmentID);
    ContractData.append("depositamount", DepositAmount);
    ContractData.append("datesigned", DateSigned);
    ContractData.append("dateexpires", DateExpires);
    ContractData.append("dateineffect", DateInEffect);

    //TODO: add appropriate url to fetch argument
    await fetch(`localhost:8000/create/Contract`,{
        method: "POST",
        body: ContractData,
    })
      .then((response) => {
        if (response === 200){swal("Contract created!")}
      })
      .catch((error) => {});
  }

  return(
      <div className="centerDiv">
        <div >
            <h3>Enter Contract information here</h3>
            <label className="pr-2 labels">ApartmentID ID#</label>
            <input type="number" onChange={(e) => setApartmentID(e.target.value)} />
            <br/>
            
            <label className="pr-2 labels">Deposit Amount</label>
            <input type="number" value={DepositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
            <br/>

            <label className="pr-2 labels">Date Signed</label>
            <DatePicker selected={DateSigned} onChange={date => setDateSigned(date)} />
            <br/>

            <label className="pr-2 labels">Date-in-effect</label>
            <DatePicker selected={DateInEffect} onChange={date => setDateInEffect(date)} />
            <br/>

            <label className="pr-2 labels">Date-expires</label>
            <DatePicker selected={DateExpires} onChange={date => setDateExpires(date)} />

            <br/>
            <Button size="lg" onClick={handleSubmit}>
                Submit
            </Button>
            
        </div>
      </div>
        
      
  )
}

export default CreateContract;