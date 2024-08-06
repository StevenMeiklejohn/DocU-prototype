import content from "../../content-data/content-data.json";
import { useState } from "react";

const BenefitApplicationForm = ({ application, updateNewApplicationOption }) => {

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        dobDay: "",
        dobMonth: "",
        dobYear: "",
        phoneNumber: "",
        niNumber: ""
    })

    const onApplicationSelectOption = (e) => {
        let selectedOption = content.applicationDropDownOptions[e.target.value]
        updateNewApplicationOption(selectedOption)

    }

    const applicationOptions = content.applicationDropDownOptions.map((appOption, index) => {
        return <option key={index} value={index}>{appOption.name}</option>
    })

    const goBack = () => {

    }

    const handleSubmit = (event) => {
        console.log(event);
    }

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let copiedForm = { ...formState }
        copiedForm[propertyName] = event.target.value;
        setFormState(copiedForm)
    }

    return (
        <div className="container">
            <div className="large--eight-twelfths">
                <h1 className="guideTextDraw">To support a benefit application</h1>
                <h2 className="guideTextDraw">About you</h2>
                <p>We need to know who you are and what application your document is supporting.
                    This is so we can process your documents with the right application as quickly as possible.
                </p>
            </div>
            <label id="applicationId-label" htmlFor="applicationId">Application made for</label>
            <div id="applicationId-describedby"
                className="large--eight-twelfths form-hint ariadescribedby guideFieldDescription">
                If you have applied for Best Start Grant and Best Start Foods as well as
                Scottish Child Payment, only select 'Scottish Child Payment'
            </div>
            <div className="dropDownList">
                <select
                    onChange={onApplicationSelectOption}
                    name="application"
                    id="applicationId"
                    aria-labelledby="applicationId-label"
                    aria-describedby="applicationId-describedby">
                    <option value="- Select -">- Select -</option>
                    {applicationOptions}
                </select>
            </div >

            <form className="guideContainerForm" noValidate autoComplete="off" onSubmit={handleSubmit} >
            <div className="guideFieldLabel">
                <p>
                    <label id="firstName-label" htmlFor="firstNameId">
                        First name(s)
                    </label>
                </p>
            </div>
            <div>
                <input className="text form-control capitalize" type="text" id="firstName"
                    name="firstName" maxLength="71" autoComplete="off"
                    placeholder="" aria-labelledby="firstName-label"
                    aria-describedby="firstName-describedby" aria-required="true"
                    onChange={handleChange} value={formState.firstName} />
            </div>
            <div className="guideFieldLabel">
                <p>
                    <label id="lastName-label" htmlFor="lastNameId">
                        Last name
                    </label>
                </p>
            </div>
            <div>
                <input className="text form-control capitalize" type="text" id="lastName"
                    maxLength="36" name="lastName" autoComplete="off"
                    placeholder="" aria-labelledby="lastName-label"
                    aria-describedby="lastName-describedby" aria-required="true"
                    onChange={handleChange} value={formState.lastName} />
            </div>

            <div className=" form-group">
                <div className="guideFieldLabel">
                    <p>
                        <label className="" id="dob-label">
                            Date of birth
                        </label>
                    </p>
                    <div className="form-hint ariadescribedby guideFieldDescription" id="dob-describedby">
                        Enter like this: 31 03 1980
                    </div>
                </div>
            </div>

            <fieldset className="dob-container sg-dobinput">
                <div className="day">
                    <label className="dob-label" htmlFor="dayId" id="dob-day-label">Day</label>
                    <input type="tel" className="dob-field dob-day form-control"
                        name="dobDay" id="dobDay" placeholder="DD" maxLength="2"
                        aria-labelledby="dob-label dob-day-label" aria-required="true"
                        aria-describedby="dob-describedby" 
                        onChange={handleChange} value={formState.dobDay}/>
                </div>
                <div className="month">
                    <label className="dob-label" htmlFor="monthId"
                        id="dob-month-label">Month</label>
                    <input type="tel" className="dob-field dob-month form-control" 
                        name="dobMonth" id="dobMonth" maxLength="2" placeholder="MM"
                        aria-labelledby="dob-label dob-month-label" aria-required="true"
                        aria-describedby="dob-describedby" 
                        onChange={handleChange} value={formState.dobMonth}/>
                </div>
                <div className="year">
                    <label className="dob-label" htmlFor="yearId" id="dob-year-label">Year</label>
                    <input type="tel" className="dob-field dob-year form-control" id="dobYear"
                        name="dobYear" maxLength="4" placeholder="YYYY"
                        aria-labelledby="dob-label dob-year-label" aria-required="true"
                        aria-describedby="dob-describedby" 
                        onChange={handleChange} value={formState.dobYear}/>
                </div>
            </fieldset>

            <div className="guideFieldLabel">
                <p>
                    <label id="phoneNumber-label" htmlFor="phoneNumberId">
                        Phone number
                    </label>
                </p>
                <div
                    id="phoneNumber-describedby"
                    className="form-hint ariadescribedby guideFieldDescription">
                    Enter a phone number that we can contact you on if we cannot match your
                    documents to you.
                </div>
            </div>
            <div>

                <input className="tel form-control digitsOnlyNoSpace" type="tel"
                    id="phoneNumber" name="phoneNumber" maxLength="21"
                    autoComplete="off" aria-labelledby="phoneNumber-label"
                    aria-describedby="phoneNumber-describedby" aria-required="true" 
                    onChange={handleChange} value={formState.phoneNumber}/>
            </div>

            <div className="guideFieldLabel">
                <p>
                    <label id="nino-label" htmlFor="niNumberId">
                        National Insurance number
                        <span className="optional">&nbsp;(if you know it)</span>
                    </label>
                </p>
                <div id="nino-describedby"
                    className="form-hint ariadescribedby guideFieldDescription">
                    It’s 9 digits long and is on your National Insurance card, benefit
                    letter, payslip or P60. <br />
                    For example: QQ 12 34 56 C
                </div>
            </div>
            <div>
                <input className="text form-control uppercase" type="text" id="niNumber"
                    autoComplete="off" name="niNumber" maxLength="13"
                    aria-labelledby="nino-label" aria-describedby="nino-describedby" 
                    onChange={handleChange} value={formState.niNumber}/>
            </div>
            <div className="GDSHighlightedInformation guidefield">
                <div className="guideFieldNode  guideTextDraw NINo_helptext defaultFieldLayout">
                    <div className="guideFieldLabel"></div>
                    <div className="hinfo ">
                        <div className="hinfo-main">
                            <span className="hinfo-icon info" aria-hidden="true"></span>
                            <span className="visuallyhidden">. Highlighted information,</span>
                            <p>If you do not let us know your National Insurance number, it
                                may take longer for us to process your application.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="toolbar">
                <div id="backbutton_copy___guide-item" className="afToolbarButton">
                    <div className="form-group af-field-empty">
                        <div id="backButton">
                            <button className="button-medium moveBack button button--cancel" type="button"
                                aria-label="Back" onClick={goBack}>
                                <span className="iconButton-icon moveBack-button-icon"></span>
                                <span className="iconButton-label moveBack-button-label">
                                    Back
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="afToolbarButton">
                    <div className="form-group">
                        <button className="next button-medium moveNext button button--primary" type="submit"
                            aria-label="Next">
                            <span className="iconButton-icon moveNext-button-icon"></span>
                            <span className="-label iconButton-label moveNext-button-label">
                                Next
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            </form>
        </div >
    )
}

export default BenefitApplicationForm;