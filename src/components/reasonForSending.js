import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const ReasonForSending = ({updateReasonForSending}) => {

    const { register, handleSubmit } = useForm();
    
    const navigate = useNavigate();

    const checkSelected = (data) => {
        let selected = null;
        for(let key in data){
            if(data[key] === "true"){
                selected = key;
            }
        }
        return selected;
    }

    const onSubmit = (data) => {
        let selected = checkSelected(data)
        updateReasonForSending(selected)
        console.log(selected);
        navigate("/application_info")
    }

    const goBack = () => {
        navigate("/")
    }

    return (
        <div className="formdiv">
            <legend>
                <h1>What’s the reason you’re sending us documents?</h1>
            </legend>

            <div id="coc-ariadescribedby-container" className="form-hint guideFieldLabel">
                <b>Select the option that applies to you:</b>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="guideContainerForm">
                <div className="row">
                    <div className="col-md-10 afWizardPanel">
                        <div id="_guide-item-container">
                            <div id="_guide-item" className="active">
                                <div className="panel">

                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="SGRadioButton">
                                                    <fieldset aria-describedby="coc-ariadescribedby-container" className="fieldset">


                                                        <div className="XfaCheckBox">
                                                            <input className="form-control fancy-radio" type="radio" value="true" {...register("To support a benefit application")} />

                                                            <label className="block-label fancy-radio inline"
                                                                htmlFor="reason-benefitApplication"
                                                                id="reason-benefitApplication-label">
                                                                To support a benefit application
                                                            </label>
                                                        </div>

                                                        <div className="XfaCheckBox">
                                                            <input className="form-control fancy-radio" type="radio" value="true" {...register("To confirm your change in circumstances")} />
                                                            <label className="block-label fancy-radio inline"
                                                                htmlFor="reason-benefitApplication"
                                                                id="reason-benefitApplication-label">
                                                                To confirm your change in circumstances
                                                            </label>
                                                        </div>


                                                        <div className="XfaCheckBox">
                                                            <input className="form-control fancy-radio" type="radio" value="true" {...register("My Benefit is moving from DWP to Social Security Scotland")} />
                                                            <label className="block-label fancy-radio inline"
                                                                htmlFor="reason-benefitApplication"
                                                                id="reason-benefitApplication-label">
                                                                My Benefit is moving from DWP to Social Security Scotland
                                                            </label>
                                                        </div>

                                                    </fieldset>
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
                                                <button className="next button-medium moveNext button button--primary"
                                                    type="submit"
                                                    aria-label="Next">
                                                    <span className="iconButton-icon moveNext-button-icon"></span>
                                                    <span className="-label iconButton-label moveNext-button-label">
                                                        Next
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )





}

export default ReasonForSending;