import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { API_URL_PEOPLE } from "../constants";
import { getAllData } from "../utils";

export default function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPeopleData() {
      let response = await getAllData(API_URL_PEOPLE);
      console.log(response);
      setPeopleData(response.results);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      setLoading(false);
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
              {peopleData.map((people, i)=>{
                  return <Card key={i} data={people} 
                  onClickDetails={handleClickDetails}/>
              })}
          </div>
        </>
      )}
    </div>
  );
}
