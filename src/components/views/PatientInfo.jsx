import React from 'react'
import ProfileForm from '../Forms/ProfileForm'

function PatientInfo({data, handleFormSubmit}) {
    // const data = {
    //     "firstName": "SARTHAK",
    //     "lastName": "CHAUHAN",
    //     "email": "abc@gmail.com",
    //     "phnNumber": "123456789",
    //     "dob": "2022-11-04",
    //     "firstTimeVaccinated": "Yes",
    //     "hasIllness": "Yes",
    //     "isAllergic": "No",
    //     "clinic": "VCH",
    //     "profession": "volunteer"
    // }
    
  return (
    <div className='my-4 patient-info-container'>
        <ProfileForm userData={data} onSubmit={handleFormSubmit}/>
    </div>
  )
}

export default PatientInfo