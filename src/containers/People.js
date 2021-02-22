import React, { useState, useEffect } from "react";
import Card from "../components/Card";
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


  return (
    <div>
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        <>
          <div>
              {peopleData.map((people, i)=>{
                  return <Card key={i} people={people}/>
              })}
          </div>
        </>
      )}
    </div>
  );
}
