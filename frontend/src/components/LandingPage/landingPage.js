import React, { useEffect } from "react";

const LandingPage = () => {
    const sampleImage = "https://apollostore.blob.core.windows.net/multifamilybiz/News/Verve_Luxury_Apartments.jpg";
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

    const handleReset = () => {
         setZipcode();
         setCity(); 
         setMonthlyPrice();
         setAvailable(); 
         setYearBuilt(); 
         setCentralAC(); 
         setNumberRooms(); 
         setNumberBathrooms();
         setRefurbished(); 
         setPetsAllowed(false);
    }

    useEffect(()=>{

    })

    return(
        <div>
            <div>
                
            </div>
        </div>
    );
}

export default LandingPage