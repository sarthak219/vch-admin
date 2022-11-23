import React, { useEffect, useState } from "react";
import "./App.css"
import SideMenu from "./components/sections/SideMenu";
// import PatientInfo from "./components/views/PatientInfo"
import ProfileForm from "./components/Forms/ProfileForm";
import axios from "axios"

function App() {
//   const [queue, setQueue] = useState([
//     {
//       name: "sarthak",
//       position: "1"
//     },
//     {
//       name: "Suyash",
//       position: "2"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
//     {
//       name: "Sam",
//       position: "3"
//     },
// ]);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async ()=>{
      axios.get("https://random-data-api.com/api/v2/users?size=10")
      .then(res => {
        setData(res.data);
      })
  }

  useEffect(()=>{
    if(data[0]){
      setFilteredData
      (Object.keys(data[0])
          .filter((key)=>{return (typeof data[0][key] !== 'object' && data[0][key] !== null && !Array.isArray(data[0][key]))})
          .reduce((obj, key) => {
            obj[key] = data[0][key];
            return obj;
          }, {}))
    }
  }, [data])

  function pop() {
      const temp = data;
      temp.shift();
      setData([...temp]);
  }

  const handleFormSubmit = (formData) => {
    postCurrPatient(formData);
    pop();
  }
  const postCurrPatient = (formData) => {
    // make POST REQUEST
  }




  return (
    <>
      <div className="row g-0">
        <div className="col-3">
          <SideMenu patients={data.map((person)=>{
          return {name:person.first_name}
        })}/>
        </div>
        <div className="col-9">
          {/* <Navbar /> */}
          <div className="container my-3">
            {/* <PatientInfo data={filteredData} handleFormSubmit={handleFormSubmit}/> */}
              <ProfileForm userData={filteredData} onSubmit={handleFormSubmit}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
