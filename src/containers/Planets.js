import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { API_URL_PLANETS } from "../constants";
import { getAllData } from "../utils";
import Header from "./Header";
import PlanetDetails from "./PlanetDetails";

export default function Planets() {
  const [planetData, setPlanetData] = useState([]);
  const [planetDetails, setPlanetDetails] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    async function fetchPlanetsData() {
      let response = await getAllData(API_URL_PLANETS);
      console.log(response);
      setPlanetData(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
      setShowDetails(false);
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

  const getPlanetDetails = async (url) => {
    let data = await getAllData(url);
    setPlanetDetails(data);
  }

  const handleClickDetails = (planet)=> {
    setShowDetails(true);
    getPlanetDetails(planet.url)
  }
  const goBack = () =>{
    setShowDetails(false)
  }


  return (
    <div>
      <Header back={goBack} showIcon = {showDetails}/>
      <Pagination prev={prev} next={next} />
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <>
          <div>
            {!showDetails && planetData.map((planet, i) => {
              return (
                <Card
                  key={i}
                  data={planet}
                  topLabel={planet.name}
                  bottomLabel={`${planet.population} people`}
                  onClickDetails={() => handleClickDetails(planet)}
                />
              );
            })}
            {showDetails && <PlanetDetails details={planetDetails}/>}
          </div>
        </>
      )}
    </div>
  );
}
