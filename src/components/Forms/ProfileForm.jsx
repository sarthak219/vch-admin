import React,{useRef, useState} from 'react'
import "../../assets/css/Form/ProfileFormStyles.css"
import Button from '../elements/Button';
import Input from '../elements/Input'
import useInput from '../Hooks/useInput'
import { db } from '../../database';
import {collection, addDoc} from "firebase/firestore"

function ProfileForm({userData, onSubmit}) {
    const patientsCollectionRef = collection(db, "patients");
    const LRef = useRef(null);
    const RRef = useRef(null);
    const consentRef = useRef(null);
    const centerNumber = useInput("");
    const lotNumber = useInput("");
    const immFirstName = useInput("");
    const immLastName = useInput("");
    const vaccine = useInput("");
    const [site, setSite] = useState("");
    const [selfReport, setSelfReport] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {success, error} = validate();
        if(success) {
            const data ={
                ...userData,
                centerNumber:centerNumber.value,
                lotNumber:lotNumber.value,
                immFirstName:immFirstName.value,
                immLastName:immLastName.value,
                vaccine:vaccine.value,
                site,
                selfReport
            }
            postData(data);
            onSubmit(data);

            resetForm();
        } else {
            alert(error)
        }
    }

    // validates all the credentials
    const validate = ()=> {
        if(isEmpty(centerNumber.value, "")) return {success: false, error:"Centre Number can't be left blank"};
        if(isEmpty(vaccine.value, "")) return {success: false, error:"Vaccine can't be left blank"};
        if(isEmpty(lotNumber.value, "")) return {success: false, error:"Lot # can't be left blank"};
        if(isEmpty(immFirstName.value, "")) return {success: false, error:"Immunizer first name can't be left blank"};
        if(isEmpty(immLastName.value, "")) return {success: false, error:"Immunizer last name can't be left blank"};
        if(isEmpty(site, "")) return {success: false, error:"Site can't be left blank"};
        return {success:true}
    }

    // Returns true if val is null or undefinifed or equal to the given initval
    const isEmpty = (val, initVal)=>{
        return val === null || val === undefined || val === initVal
    }

    const postData = async (data) => {
        await addDoc(patientsCollectionRef, data);
    }

    const resetForm = ()=> {
        centerNumber.setValue("")
        lotNumber.setValue("")
        immFirstName.setValue("")
        immLastName.setValue("")
        vaccine.setValue("")
        setSite("");
        if(RRef.current.checked) RRef.current.checked = false;
        if(LRef.current.checked) LRef.current.checked = false;
        if(consentRef.current && consentRef.current.checked) consentRef.current.checked = false;
        setSelfReport(false);
    }

  return (
    <div className='profile-form-container'>

        {userData ? 
        <>
            <div className="d-flex justify-content-between">
                <h1 className='mb-4'>Current Patient</h1>
                <img src={require("../../assets/img/VCH-logo.png")} alt={"logo"} className="rounded" width="80px"/>
            </div>
            <div className="row g-0">
                {Object.keys(userData).map((key, index)=>{
                    return(
                        <div key={index} className="col-md-4 col-6 wrap px-2">
                            <h5 className='mb-0 wrap'>{key}</h5>
                            {key === "isVchEmployee" ? <>
                                {userData[key] ?                                 
                                    <p className=''>{"Yes"}</p> :
                                    <p className=''>{"No"}</p>
                                }
                            </>
                                :
                                (key === "empCode" && !userData["isVchEmployee"])  ? <>                
                                        <p className=''>{"N/A"}</p>
                                </>
                                :
                                <p className=''>{userData[key]}</p>}
                        </div>
                    )
                })}
            </div>

            <h3 className='my-4'>To be filled by immunizer</h3>
            <form>
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <Input id={"centerNumber"} type={"text"} label={"Center #"} {...centerNumber}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <Input id={"vaccineName"} type={"text"} label={"Vaccine"} {...vaccine}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <Input id={"lotNum"} type={"text"} label={"Lot Number"} {...lotNumber}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <Input id={"immFirstName"} type={"text"} label={"First Name"} {...immFirstName}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <Input id={"immLastName"} type={"text"} label={"Last Name"} {...immLastName}/>
                    </div>
                    <div className="col-md-3 col-sm-4 col-6 wrap px-2">
                        <fieldset id="vSite">
                            <div className="d-flex align-items-center">
                                <p className='m-2'>Site</p>
                                <div className="form-check-inline">
                                    <input className="form-check-input" ref={LRef} value={"Yes"} type="radio" name="vSite" id="vSiteYes" onChange={(e)=>{setSite(e.target.value)}}/>
                                    <label className="form-check-label gray" htmlFor="vSiteYes">
                                        L
                                    </label>
                                </div>
                                <div className="form-check-inline">
                                    <input className="form-check-input" ref={RRef} value={"No"} type="radio" name="vSite" id="vSiteoNo" onChange={(e)=>{setSite(e.target.value)}}/>
                                    <label className="form-check-label gray" htmlFor="vSiteNo">
                                        R
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
                {userData["isVchEmployee"] && 
                <div className="form-check mb-4">
                    <input className="form-check-input" ref={consentRef} type="checkbox" id="selfReportConsent" {...selfReport} onChange={(e)=>{setSelfReport(e.target.checked)}}/>
                    <label className="form-check-label  " htmlFor="selfReportConsent">
                        <i className='text-muted'>Does the patient want to self report?</i>
                    </label>
                </div> }

                <div className='d-flex justify-content-center'>
                    <Button onClick={handleSubmit} className={"submit-btn mt-3"} type={"submit"} text="Submit"/>
                </div>
            </form>
        </> : 
        <><h1>No patient in queue</h1></>}
    </div>
  )
}

export default ProfileForm