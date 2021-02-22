import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { API_URL_PLANETS } from "../constants";
import { getAllData } from "../utils";

export default function Planets() {
  const [planetData, setPlanetData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPlanetsData() {
      let response = await getAllData(API_URL_PLANETS);
      console.log(response);
      setPlanetData(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
    }
    fetchPlanetsData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllData(nextUrl);
    setPlanetData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };
  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllData(prevUrl);
    setPlanetData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const handleClickDetails = ()=> {
   

  }


  return (
    <div>
      <Pagination prev={prev} next={next}/>
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <>
          <div>
              {planetData.map((planet, i)=>{
                  return <Card key={i} data={planet} 
                  onClickDetails={handleClickDetails}/>
              })}
          </div>
        </>
      )}
    </div>
  );
}
