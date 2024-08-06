import content from "../../content-data/content-data.json";
import BenefitApplicationForm from "./benefitApplicationForm";

const ApplicationInfo = ({ application, updateNewApplicationOption }) => {

    // To do;
    // Error/display message
    // isSubmitted
    // isCicForm



    // Conditionally render form.

    // To support a Benefit Application 

    if (application === "To support a benefit application") {
        return (
            <BenefitApplicationForm updateNewApplicationOption={updateNewApplicationOption}/>
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