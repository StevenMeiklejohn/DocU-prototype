import content from "../content-data/content-data.json";

const ApplicationInfo = ({ application, updateNewApplicationOption }) => {

    // To do;
    // Error/display message
    // isSubmitted
    // isCicForm

    const onApplicationSelectOption = (e) => {
        let selectedOption = content.applicationDropDownOptions[e.target.value]
        updateNewApplicationOption(selectedOption)

    }

    const applicationOptions = content.applicationDropDownOptions.map((appOption, index) => {
        return <option key={index} value={index}>{appOption.name}</option>
    })

    // Conditionally render form.

    // To support a Benefit Application 

    if (application === "To support a benefit application") {
        return (
            <div className="container">
                <div className="large--eight-twelfths">
                    <h1 class="guideTextDraw">To support a benefit application</h1>
                    <h2 class="guideTextDraw">About you</h2>
                    <p>We need to know who you are and what application your document is supporting.
                        This is so we can process your documents with the right application as quickly as possible.
                    </p>
                </div>
                <label id="applicationId-label" for="applicationId">Application made for</label>
                <div id="applicationId-describedby"
                    class="large--eight-twelfths form-hint ariadescribedby guideFieldDescription">
                    If you have applied for Best Start Grant and Best Start Foods as well as
                    Scottish Child Payment, only select 'Scottish Child Payment'
                </div>
                <div class="dropDownList">
                    <select
                    onChange={onApplicationSelectOption}
                    formControlName="application"
                    id="applicationId"
                    aria-labelledby="applicationId-label"
                    aria-describedby="applicationId-describedby">
                    <option value="- Select -">- Select -</option>
                    {applicationOptions}
                    </select>
                    </div >
            </div >
        )
    }

    else if (application === "Change in circumstances") {
    return (
        <h1>Change in circumstances form</h1>
    )
}

// My Benefit is moving from DWP to Social Security Scotland
else if (application === "My Benefit is moving from DWP to Social Security Scotland") {
    return (
        <h1>My Benefit is moving from DWP to Social Security Scotland form</h1>
    )
}

else {
    return (<h1>There has been a problem with application type selection</h1>)
}



}

export default ApplicationInfo;