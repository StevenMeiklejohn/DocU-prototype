import EvidenceSubmission from "../components/evidenceSubmission.js";
import ReasonForSending from "../components/reasonForSending.js";
import ApplicationInfo from "../components/applicationInfo/applicationInfo.js";
import {Route, Routes} from 'react-router-dom';
import { useState } from "react";




const MainContainer = () => {

    const [reasonForSending, setReasonForSending] = useState("")
    const [newApplicationOption, setNewApplicationOption] = useState("")
    const [cicApplication, setCicApplication] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState({
        day: null,
        month: null,
        year: null
    })
    const [phoneNumber, setPhoneNumber] = useState("")



    const updateReasonForSending = (reason) => {
        setReasonForSending(reason)
    }

    const updateNewApplicationOption = (option) => {
        setNewApplicationOption(option)
    }


    return(
        <Routes>
            <Route path="/" element={<EvidenceSubmission />} />
            <Route path="/reasonforsending" 
                element={<ReasonForSending 
                updateReasonForSending={updateReasonForSending}/>} />
            <Route path="/application_info" 
                element={<ApplicationInfo 
                application={reasonForSending}
                updateNewApplicationOption={updateNewApplicationOption}/>} />


        </Routes>
    )

}

export default MainContainer;