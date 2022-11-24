import React, { useEffect, useState } from "react";
import "./App.css"
import SideMenu from "./components/sections/SideMenu";
import ProfileForm from "./components/Forms/ProfileForm";
import {db} from "./database/index.js";
import { collection, getDocs, doc, deleteDoc , addDoc} from "firebase/firestore"
import Button from "./components/elements/Button";


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
  const queueCollectionRef = collection(db, "queue")
  const patientCollectionRef = collection(db, "patients")

  useEffect(()=>{
    fetchData();
    // eslint-disable-next-line
  }, []);

  const fetchData = async ()=>{
      const tempData = await getDocs(queueCollectionRef);
      setData(tempData.docs.map( (doc) => ({ ...doc.data(), id: doc.id })));
  }

  useEffect(()=>{
    if(data[0]){
      setFilteredData
      (Object.keys(data[0])
          .filter((key)=>{return (
            typeof data[0][key] !== 'object' && data[0][key] !== null && !Array.isArray(data[0][key] &&
              data[0][key] !== "" && data[0][key] !== undefined))})
          .reduce((obj, key) => {
            obj[key] = data[0][key];
            return obj;
          }, {}))
        // setFilteredData(data[0]);
    } else {
      setFilteredData(null);
    }
  }, [data])

  function pop() {
      const temp = data;
      temp.shift();
      setData([...temp]);
      if(data[0]) {
        const id = data[0].id;
        const userDoc = doc(db, "queue", id);
        deleteDoc(userDoc);
        // console.log(userDoc);
      }
  }

  const handleFormSubmit = (formData) => {
    postCurrPatient(formData);
    pop();
  }
  const postCurrPatient = async (formData) => {
    // make POST REQUEST
     await addDoc(patientCollectionRef, formData);
  }




  return (
    <>
      <div className="row g-0">
        <div className="col-3" style={{position: "relative"}}>
          <Button onClick={fetchData} className={"refresh-btn mt-3"} type={"button"} text="Refresh"/>
          <SideMenu patients={data.map((person)=>{
          return {firstName:person.firstName, lastName: person.lastName}
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
