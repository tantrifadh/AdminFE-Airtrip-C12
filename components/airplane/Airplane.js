<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
import PageComponentTitle from './PageComponentTitle';
import AirplaneTable from './AirplaneTable';
import axios from "axios";
=======
import React, { useEffect, useRef, useState } from "react";
import PageComponentTitle from "./PageComponentTitle";
import AirplaneTable from "./AirplaneTable";
import axios from "axios";
import { Loading } from "../common/Loading";
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114

function parseAirplane(airplanes) {
  const rows = airplanes.map((airplane) => {
    return {
      id: airplane.id,
      image: airplane.image,
      model_number: airplane.model_number,
      manufacture: airplane.manufacture,
<<<<<<< HEAD
      capacity: airplane.capacity
=======
      capacity: airplane.capacity,
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
    };
  });

  //const headers = Object.keys(rows[0]);

  return rows;
}
<<<<<<< HEAD


const Airplane = () => {

  const airplaneData = useRef(null);
  const [airplanes, setAirplanes] = useState(null);

  async function fetchAirplanes(){
    try {
      const data = await axios.get("/airplanes");
=======

const Airplane = () => {
  const airplaneData = useRef(null);
  const [airplanes, setAirplanes] = useState(null);

  async function fetchAirplanes() {
    try {
      const data = await axios.get("/airplanes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
      airplaneData.current = data.data.data;

      setAirplanes(parseAirplane(airplaneData.current));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchAirplanes();
  }, []);
<<<<<<< HEAD
  return (
      <main className="p-6 sm:p-10 space-y-6">
      
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <PageComponentTitle 
              title='Airplane'
              fetchAirplanes={fetchAirplanes}
              // titleDescription='List, view and edit'
              buttonTitle='Create new airplane'
          />
      </div>

      <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
        
        <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
          <AirplaneTable 
            datas={airplanes}
            fetchAirplanes={fetchAirplanes}
            />
        </div>
                  
      </section>
      
      
=======

  if (!airplanes) return <Loading />;
  return (
    <main className="p-6 sm:p-10 space-y-6">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <PageComponentTitle
          title="Airplane"
          fetchAirplanes={fetchAirplanes}
          // titleDescription='List, view and edit'
          buttonTitle="Create new airplane"
        />
      </div>

      <section className="grid md:grid-cols-1 xl:grid-cols-1 gap-6">
        <div className="flex-grow items-center p-8 bg-white shadow rounded-lg">
          <AirplaneTable datas={airplanes} fetchAirplanes={fetchAirplanes} />
        </div>
      </section>
>>>>>>> 82ee4676d32cb674764dfa965d679464765a5114
    </main>
  );
};

export default Airplane;
