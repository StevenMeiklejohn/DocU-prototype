const EvidenceSubmission = () => {

    const next = () => {
        
    }

    return (
        <>
            <h1 className="heading-large">Sending us documents</h1>
            <p>You can upload your documents here, if you need to support your benefit application or change in circumstances.</p>
            <p>You can upload a picture, screenshot or scan of your documents.</p>

            <p>If you’re uploading a copy of your ID e.g. passport, driving license or birth certificate,
                then we need to be able to clearly see all the information given on the document.
                To do this, make sure that the whole document is clear and can easily be read.
            </p>
            <p>If we cannot read your document properly, it may slow down the progress of your
                benefit application or the processing of your change in circumstances.
            </p>
            <blockquote className="info-note blockquote">
                <cite>If you’re sending us documents on behalf of someone else, for example as an appointee,
                    enter the applicant’s details instead of your own.
                </cite>
            </blockquote>

            <h2>You and your data</h2>

            <p>Our privacy notice explains your rights under the Data Protection Act 2018 (DPA) and General Data Protection
                Regulation (GDPR). It describes the type of information we may hold on you, how it may be processed and who we might
                share it with.
            </p>
            <p>Personal data (which we will call ‘data’ throughout the rest of this notice) means any information about an
                individual from which that person can be identified.
            </p>
            <p>Social Security Scotland processes lots of data to do our job. We manage your personal data to deliver a number of
                social security benefits outlined in the Social Security (Scotland) Act 2018. We are committed to protecting and
                respecting your privacy.
            </p>
            <p>Social Security Scotland is registered with the Information Commission (number Z4857137) under Scottish Ministers, to
                handle your data.
            </p>
            <p>If you want to know more about Social Security Scotland use your data, you can read our full
                <a href="https://www.mygov.scot/social-security-data/" target="_blank">privacy notice
                    <span aria-hidden="true" className="open-in-new">open_in_new</span>
                    <span className="visuallyhidden"> (opens in a new window)</span>
                </a>
                online and
                <a href="https://policies.google.com/privacy?hl=en-UK" target="_blank">Google reCAPTCHA privacy notice
                    <span aria-hidden="true" className="open-in-new">open_in_new</span>
                    <span className="visuallyhidden"> (opens in a new window)</span>
                </a>.
            </p>

            <div className="link-button-wrapper">
                <button onClick={next()} role="button" title="next" aria-label="Next" className="button button--primary button-medium">
                <span className="link-text">Next</span>
                <span className="iconButton-icon moveNext-button-icon"></span>
            </button>
        </div >

<div className="clearfix"></div>

<div className="pusher"></div>
</>
    )
    
}

export default EvidenceSubmission;