import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const LandingPage = () => {
    const sampleImage = "https://apollostore.blob.core.windows.net/multifamilybiz/News/Verve_Luxury_Apartments.jpg";
    const [ZipCode, setZipcode] = useState(66502);
    const [City, setCity] = useState("");
    const [MonthlyPrice, setMonthlyPrice] = useState(0)
    const [Available, setAvailable] = useState(true);
    const [YearBuilt, setYearBuilt] = useState(undefined);
    const [CentralAC, setCentralAC] = useState(false);
    const [NumberRooms, setNumberRooms] = useState(0);
    const [NumberBathrooms, setNumberBathrooms] = useState(0);
    const [Refurbished, setRefurbished] = useState(false);
    const [PetsAllowed, setPetsAllowed] = useState(false);
    const [listOfApartments, setListOfApartments] = useState([1]);

    const handleReset = () => {
         setZipcode(66502);
         setCity(""); 
         setMonthlyPrice(0);
         setAvailable(true); 
         setYearBuilt(undefined); 
         setCentralAC(false); 
         setNumberRooms(0); 
         setNumberBathrooms(0);
         setRefurbished(false); 
         setPetsAllowed(false);
    }

    
    useEffect(()=>{
        
    })

    return(
        <div>
            <div>
                <Button onClick ={handleReset}>Reset Filters</Button>
            </div>
        </div>
    );
}

export default LandingPage