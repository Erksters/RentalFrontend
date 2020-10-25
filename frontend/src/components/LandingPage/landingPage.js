import React, { useEffect, useState } from "react";
import { Button, Collapse } from "react-bootstrap";

const LandingPage = () => {
    const sampleImage = "https://apollostore.blob.core.windows.net/multifamilybiz/News/Verve_Luxury_Apartments.jpg";
    const [ZipCode, setZipcode] = useState(66502);
    const [City, setCity] = useState("");
    const [MonthlyPrice, setMonthlyPrice] = useState(0)
    const [Available, setAvailable] = useState(true);
    const [YearBuilt, setYearBuilt] = useState(1900);
    const [CentralAC, setCentralAC] = useState(false);
    const [NumberRooms, setNumberRooms] = useState(0);
    const [NumberBathrooms, setNumberBathrooms] = useState(0);
    const [Refurbished, setRefurbished] = useState(false);
    const [PetsAllowed, setPetsAllowed] = useState(false);

    const [searchByZipCode, setSeachByZipcode] = useState(true);
    const [searchByCity, setsearchByCity] = useState(false);
    const [searchByMonthlyPrice, setsearchByMonthlyPrice] = useState(true);
    const [searchByAvailable, setSearchByAvailable] = useState(false);
    const [searchByYearBuilt, setsearchBySearchByYearBuilt] = useState(false);
    const [searchByCentralAC, setSearchByCentralAC] = useState(false);
    const [searchByNumberBathrooms, setsearchByNumberBathrooms ] = useState(false);
    const [searchByNumberRooms, setsearchByNumberRooms ] = useState(false);
    const [searchByRefurbished, setSearchByRefurbished ] = useState(false);
    const [searchByPetsAllowed, setsearchByPetsAllowed] = useState(false);

    const [listOfApartments] = useState([1]);


    const [open, setOpen] = useState(false);


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

    const handleSubmit = () => {

    }

    const loadData = async () => {
        const filterData = new FormData();
        filterData.append("city", City);
        filterData.append("zipcode", ZipCode);
        if(YearBuilt !== undefined){
            filterData.append("YearBuilt", YearBuilt);
        }else{filterData.append("YearBuilt",undefined)}
        filterData.append("centralac", CentralAC);
        filterData.append("numberrooms", NumberRooms);
        filterData.append("numberbathrooms", NumberBathrooms);
        filterData.append("refurbished", Refurbished);
        filterData.append("petallowed", PetsAllowed);

        await fetch(``,{
            method: "GET",
            body: filterData,
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            
          })
          .catch((error) => {});
      };
    
    useEffect(()=>{
        
    })

    return(
        <div>
            <div>
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
{/* 
            <label className="pr-2 labels">Refurbished</label>
            <input type="checkbox" value={searchByRefurbished} onChange={(e) => setSearchByRefurbished(e.target.value)} />
            {searchByRefurbished && 
                <input type="checkbox" onChange={(e) => setRefurbished(e.target.value)} />
            }
            <br/> */}
            
            
        

            <Button onClick={() => setsearchByPetsAllowed(!searchByPetsAllowed)}>
                Pets
            </Button>
            <Collapse in={searchByPetsAllowed}>
                <div >
                <label >{PetsAllowed ? "Pets allowed": "No Pets allowed"}</label>
                        <input type="checkbox" onClick={(e) => setPetsAllowed(!PetsAllowed)} />
                </div>
            </Collapse>
            <br/>
            
            <Button onClick={handleSubmit}>Search</Button>
            <Button onClick ={handleReset}>Reset Filters</Button>
            </div>
        </div>
    );
}

export default LandingPage