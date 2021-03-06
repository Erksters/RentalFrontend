import React, { useEffect, useState } from "react";
import { Button, Card, CardImg, Col, Collapse, Row ,} from "react-bootstrap";
import Loading from "../Loading/Loading";

const LandingPage = () => {
    const sampleImage = "https://apollostore.blob.core.windows.net/multifamilybiz/News/Verve_Luxury_Apartments.jpg";
    const [Zipcode, setZipcode] = useState(66502);
    const [City, setCity] = useState("");
    const [MonthlyPrice, setMonthlyPrice] = useState(0)
    const [Available, setAvailable] = useState(true);
    const [YearBuilt, setYearBuilt] = useState(1900);
    const [CentralAC, setCentralAC] = useState(false);
    const [NumberRooms, setNumberRooms] = useState(0);
    const [NumberBathrooms, setNumberBathrooms] = useState(0);
    const [Refurbished, setRefurbished] = useState(false);
    const [PetsAllowed, setPetsAllowed] = useState(false);

    const [searchByZipcode, setSearchByZipcode] = useState(false);
    const [searchByCity, setSearchByCity] = useState(false);
    const [searchByMonthlyPrice, setsearchByMonthlyPrice] = useState(false);
    const [searchByAvailable, setSearchByAvailable] = useState(false);
    const [searchByYearBuilt, setsearchByYearBuilt] = useState(false);
    const [searchByCentralAC, setSearchByCentralAC] = useState(false);
    const [searchByNumberBathrooms, setsearchByNumberBathrooms ] = useState(false);
    const [searchByNumberRooms, setsearchByNumberRooms ] = useState(false);
    const [searchByRefurbished, setSearchByRefurbished ] = useState(false);
    const [searchByPetsAllowed, setsearchByPetsAllowed] = useState(false);

    const [listOfApartments, setListOfApartments] = useState([1,1,1,1]);

    const handleReset = () => {
        window.location = "/"
    }

    const handleSearch = async () => {

        const filterData = new FormData();
        
        filterData.append("city", (searchByCity ? City :"null") );
        filterData.append("zipcode", (searchByZipcode ? Zipcode :"null") );
        filterData.append("zipcode", (searchByAvailable ? Available :"null") );
        filterData.append("yearbuilt", (searchByYearBuilt ? YearBuilt :"null") );
        filterData.append("centralac", (searchByCentralAC ? CentralAC :"null") );
        filterData.append("numberrooms", (searchByNumberRooms ? NumberRooms :"null") );
        filterData.append("numberbathrooms", (searchByNumberBathrooms ? NumberBathrooms :"null") );
        filterData.append("refurbished", (searchByRefurbished ? Refurbished :"null") );
        filterData.append("petallowed", (searchByPetsAllowed ? PetsAllowed :"null") );

        //TODO: add appropriate url to fetch argument
        await fetch(`localhost:8000/get/apartments`,{
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
        
        // setListOfApartments(loadData());  //Should return a list
    })
    if (listOfApartments.length === 0){
        return <Loading />
    }
    return(
        <div>
            <Row>
                <Col>
                    <Button onClick={() => setSearchByCity(!searchByCity)}>
                        City
                    </Button>
                    <Collapse in={searchByCity}>
                    <div >
                            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    </Collapse>
                    <br/>            

                    <Button onClick={() => setSearchByZipcode(!searchByZipcode)}>
                        Zipcode
                    </Button>
                    <Collapse in={searchByZipcode}>
                    <div >
                        <input type="number" value={Zipcode} onChange={(e) => setZipcode(e.target.value)} />
                    </div>
                    </Collapse>
                    <br/>     

                    <Button onClick={() => setSearchByAvailable(!searchByAvailable)}>
                        Available
                    </Button>
                    <Collapse in={searchByAvailable}>
                    <div >
                    <label >{Available ? "Currently Available": "Currently Not Available"}</label>
                            <input type="checkbox" defaultChecked={true} onClick={(e) => setAvailable(!Available)} />
                    </div>
                    </Collapse>
                    <br/>            


                    <Button onClick={() => setsearchByYearBuilt(!searchByYearBuilt)}>
                        YearBuilt
                    </Button>
                    <Collapse in={searchByYearBuilt}>
                    <div >
                        <input type="number" value={YearBuilt} onChange={(e) => setYearBuilt(e.target.value)} />
                    </div>
                    </Collapse>
                    <br/>     

                    {/* TODO Date Available */}


                    <Button onClick={() => setsearchByMonthlyPrice(!searchByMonthlyPrice)}>
                        MonthlyPrice
                    </Button>
                    <Collapse in={searchByMonthlyPrice}>
                    <div >
                            <input type="number" value={MonthlyPrice} onChange={(e) => setMonthlyPrice(e.target.value)} />
                    </div>
                    </Collapse>
                    <br/>     

                    <Button onClick={() => setSearchByCentralAC(!searchByCentralAC)}>
                    CentralAC
                    </Button>
                    <Collapse in={searchByCentralAC}>
                    <div >
                    <label >{CentralAC ? "With CentralAC": "No CentralAC"}</label>
                            <input type="checkbox" onClick={(e) => setCentralAC(!CentralAC)} />
                    </div>
                    </Collapse>
                    <br/>            

                    <Button onClick={() => setsearchByNumberRooms(!searchByNumberRooms)}>
                        Number of Rooms
                    </Button>
                    <Collapse in={searchByNumberRooms}>
                    <div >
                            <input type="number" value={NumberRooms} onChange={(e) => setNumberRooms(e.target.value)} />
                    </div>
                    </Collapse>
                    <br/>     

                    <Button onClick={() => setsearchByNumberBathrooms(!searchByNumberBathrooms)}>
                        Number of Bathrooms
                    </Button>
                    <Collapse in={searchByNumberBathrooms}>
                        <div >
                            <input type="number" value={NumberBathrooms} onChange={(e) => setNumberBathrooms(e.target.value)} />
                        </div>
                    </Collapse>
                    <br/>     

                    <Button onClick={() => setSearchByRefurbished(!searchByRefurbished)}>
                        Refurbished
                    </Button>
                    <Collapse in={searchByRefurbished}>
                        <div >
                        <label >{Refurbished ? "Refurbished": "Not Refurbished"}</label>
                                <input type="checkbox" onClick={(e) => setRefurbished(!Refurbished)} />
                        </div>
                    </Collapse>
                    <br/>            
                
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

                    <Button onClick={handleSearch}>Search</Button>
                    <Button onClick ={handleReset}>Reset Filters</Button>
                </Col>    
                <Col xs={8}>
                    {listOfApartments.map((item, index) => 
                        (<Card key = {index} style={{width: 500, display: "inline-block", margin: 16}}>
                            <Card.Header>item.id</Card.Header>
                            <CardImg src={sampleImage}/>
                            <Card.Title>item.street1</Card.Title>
                            <Card.Text>item.street2 === null ? "": item.street2</Card.Text>
                            <Card.Text>item.NumberRooms</Card.Text>
                            <Card.Text>item.NumberBathrooms</Card.Text>
                            <Card.Text>item.MonthlyPrice</Card.Text>
                            <Card.Text>item.CentralAC</Card.Text>
                            <Card.Text>item.Refubished</Card.Text>
                            <Card.Text>item.PetsAllowed</Card.Text>
                            <Card.Text>item.YearBuilt</Card.Text>
                            <Card.Text>item.DateAvailable? non-null</Card.Text>
                        </Card>))
                        }
                </Col>
            </Row>
        </div>
    );
}

export default LandingPage