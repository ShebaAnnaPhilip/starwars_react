import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import PersonDetails from "./PersonDetails";
import Pagination from "../components/Pagination";
import { API_URL_PEOPLE } from "../constants";
import { getAllData } from "../utils";
import Header from "./Header";

export default function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [personDetails, setPersonDetails] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    async function fetchPeopleData() {
      let response = await getAllData(API_URL_PEOPLE);
      setPeopleData(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
      setShowDetails(false);
    }
    fetchPeopleData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllData(nextUrl);
    setPeopleData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };
  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllData(prevUrl);
    setPeopleData(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const getPersonDetails = async (url) => {
    let data = await getAllData(url);
    setPersonDetails(data);
    setLoading(false);
  }
  
  const handleClickDetails = (person) => {
    setLoading(true);
    setShowDetails(true);
    getPersonDetails(person.url)
  };

  const goBack = () =>{
    setShowDetails(false)
  }

  return (
    <div>
      <Header back={goBack} showIcon={showDetails} name="People"/>
      {!showDetails &&
      <>
      <Pagination prev={prev} next={next} disablePrev={!prevUrl} disableNext={!nextUrl}/>
      <h2>PEOPLE</h2>
      </>
      }
      
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <>
          <div>
            {!showDetails &&
              peopleData.map((person, i) => {
                return (
                  <Card
                    key={i}
                    data={person}
                    topLabel={person.name}
                    onClickDetails={()=>handleClickDetails(person)}
                  />
                );
              })}
            {showDetails && <PersonDetails details={personDetails} loading={loading}/>}
          </div>
        </>
      )}
    </div>
  );
}
