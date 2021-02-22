import React, {useState, useEffect} from 'react'
import Card from '../components/Card';
import StarshipDetails from "./StarshipDetails";
import Pagination from '../components/Pagination';
import {  API_URL_STARSHIPS } from '../constants';
import { getAllData } from "../utils";


export default function Starships() {
    const [starshipData, setStarshipData] = useState([]);
    const [starshipDetails, setStarshipDetails] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
useEffect(() => {
  async function fetchPeopleData() {
    let response = await getAllData(API_URL_STARSHIPS);
    setStarshipData(response.results);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    setLoading(false);
  }
  fetchPeopleData();
}, []);

const next = async () => {
    setLoading(true);
    let data = await getAllData(nextUrl);
    setStarshipData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
}
const prev = async () => {
    if(!prevUrl) return;
    setLoading(true);
    let data = await getAllData(prevUrl);
    setStarshipData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
}
const getStarshipDetails = async (url) => {
    let data = await getAllData(url);
    setStarshipDetails(data);
    setLoading(false);
  }
  
  const handleClickDetails = (starship) => {
    setLoading(true);
    setShowDetails(true);
    getStarshipDetails(starship.url)
  };

  const goBack = () =>{
    setShowDetails(false)
  }


    return (
        <div>
            <Pagination prev={prev} next={next}/>
            {loading?<h1>Loading .....</h1>:(
                <>
                <div className="grid-container">
                    {!showDetails && starshipData.map((starship,i)=>{
                        return <Card key={i} data={starship}
                        topLabel={starship.name}
                    bottomLabel={`${starship.model} model`}
                    onClickDetails={()=>handleClickDetails(starship)}/>
                    })}
                </div>
                </>
            )}
            {showDetails && <StarshipDetails details={starshipDetails} loading={loading}/>}

        </div>
    )
}
