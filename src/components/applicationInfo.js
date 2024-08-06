const ApplicationInfo = ({application}) => {

    // To do;
    // Error/display message
    // isSubmitted
    // isCicForm

    // Conditionally render form.

    // To support a Benefit Application 

    if(application === "To support a benefit application"){
        return(
            <h1>Benefit application form</h1>
        )
    }

    // Change in circumstances
    else if(application === "Change in circumstances"){
        return(
            <h1>Change in circumstances form</h1>
        )
    }

    // My Benefit is moving from DWP to Social Security Scotland
    else if(application === "My Benefit is moving from DWP to Social Security Scotland"){
        return(
            <h1>My Benefit is moving from DWP to Social Security Scotland form</h1>
        )
    }

    else{
        return(<h1>There has been a problem with application type selection</h1>)
    }


//     return(
//         <app-error-summary [displayMessage]="displayMessage"
//     [isSubmitted]="isSubmitted"
//     [isCicForm]="isCic"></app-error-summary>
// <div class="container">
//     <div class="large--eight-twelfths">
//         <h1 *ngIf="isBenApp" class="guideTextDraw">To support a benefit application</h1>
//         <h1 *ngIf="isTransferDwp" class="guideTextDraw">My Benefit is moving from DWP to Social Security Scotland</h1>
//         <h2 *ngIf="isBenApp || isTransferDwp" class="guideTextDraw">About you</h2>
//         <h1 *ngIf="isCic" class="guideTextDraw">About You</h1>
//         <p  *ngIf="!isCic && !isTransferDwp">We need to know who you are and what application your document is supporting.
//             This is so we can process your documents with the right application as quickly as possible.
//         </p>
//         <p *ngIf="isTransferDwp">
//             We need to know who you are and which benefit your document is supporting. This is so we can process your documents as quickly as possible.
//         </p>
//         <p *ngIf="isCic">We need to know who you are so we can process your documents as quickly as possible.</p>
//     </div>
//     <form class="guideContainerForm" novalidate autocomplete="off" [formGroup]="applicationInfoForm"
//         (ngSubmit)="applicationInfoSubmit()">
//         <div class="row">
//             <div class="col-md-10 afWizardPanel">
//                 <div id="_guide-item-container">
//                     <div id="_guide-item" class="active">
//                         <div class="panel">

//                             <!-- Application group -->
//                             <div class="row">
//                                 <div class="col-md-12">
//                                     <div class="form-group" *ngIf="!isCic">
//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label *ngIf="!isTransferDwp" id="applicationId-label" for="applicationId">
//                                                     Application made for
//                                                 </label>
//                                                 <label *ngIf="isTransferDwp" id="applicationId-label" for="applicationId">
//                                                     Award moving from the Department for Work and Pensions
//                                                 </label>
//                                             </p>
//                                             <div *ngIf="!isTransferDwp" id="applicationId-describedby"
//                                                 class="large--eight-twelfths form-hint ariadescribedby guideFieldDescription">
//                                                 If you have applied for Best Start Grant and Best Start Foods as well as
//                                                 Scottish Child Payment, only select 'Scottish Child Payment'<br>
//                                             </div>
//                                             <div *ngIf="isTransferDwp" id="applicationId-describedby"
//                                                  class="large--eight-twelfths form-hint ariadescribedby guideFieldDescription">
//                                                 <p>Select the Social Security benefit your award is moving to. The below table may help you. </p><br>

//                                                 <table class="benefit-table">
//                                                     <thead>
//                                                     <tr>
//                                                         <th scope="col">DWP Benefit</th>
//                                                         <th scope="col">Social Security Scotland Benefit</th>
//                                                     </tr>
//                                                     </thead>
//                                                     <tbody>
//                                                         <tr *ngFor="let rowValue of caseTransferBenefitTableValues">
//                                                             <td>{{rowValue.dwpName}}</td>
//                                                             <td>{{rowValue.sssName}}</td>
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         <div class="dropDownList">
//                                             <select
//                                                 (change)="onApplicationSelectOption($event)"
//                                                 formControlName="application"
//                                                 id="applicationId"
//                                                 aria-labelledby="applicationId-label"
//                                                 aria-describedby="applicationId-describedby">
//                                                 <option value="" disabled>- Select -</option>
//                                                 <option *ngFor="let option of applyApplicationOptions;" value="{{option.value}}">{{option.name}}</option>
//                                             </select>
//                                         </div>
//                                         <app-control-error [control]="applicationInfoForm.get('application')"
//                                             [name]="['application']"></app-control-error>
//                                     </div>
//                                     <div class="form-group"  *ngIf="isCic">
//                                         <fieldset class="fieldset">
//                                             <legend>
//                                                 <strong>Which of these do you get?</strong>
//                                             </legend>
//                                             <div id="" class="form-hint ariadescribedby guideFieldDescription">
//                                                 <p>This includes if you’ve applied for any of these and are waiting on the outcome.</p>
//                                                 <p><strong>Select all that apply:</strong></p>
//                                             </div>
//                                             <div class="XfaCheckBox" *ngFor="let option of applyCicOptions; let i=index" >
//                                                 <input class="fancy-checkbox"
//                                                     name="cic-{{option.value}}"
//                                                     type="checkbox"
//                                                     [checked]="isChecked(option.value)"
//                                                     id="cic-applicationId-{{i}}"
//                                                     (change)="onCheckboxChange($event)"
//                                                     [value]="option.value" />
//                                                 <label class="block-label fancy-checkbox"
//                                                     for="cic-applicationId-{{i}}">
//                                                     {{option.name}}
//                                                 </label>
//                                             </div>
//                                         </fieldset>
//                                         <select formControlName="cicApplication"
//                                                 id="cicApplicationId"
//                                                 multiple
//                                                 aria-hidden="true"
//                                                 style="display: none;">
//                                                 <option value="" disabled>- Select -</option>
//                                                 <option value="BSG">Best Start Grant &amp; Best Start Foods</option>
//                                                 <option value="SCP">Scottish Child Payment</option>
//                                             </select>
//                                         <app-control-error
//                                             [control]="applicationInfoForm.get('cicApplication')"
//                                             [name]="['cicApplication']">
//                                         </app-control-error> <!-- Select the benefits you get -->

//                                     </div>
//                                 </div>
//                             </div>
//                             <!--hint text for CDP applications only-->
//                             <blockquote *ngIf="benTypeChosen === 'CDP'" id="applicationCdpHint" class="large--eight-twelfths info-note blockquote ariadescribedby">
//                                 <cite>Enter the <strong>child’s name and date of birth</strong>, instead of your own name and date of birth</cite>
//                             </blockquote>
//                             <!--hint text for CSP applications only-->
//                             <blockquote *ngIf="benTypeChosen === 'CSP' || cicTypeChosen === 'CSP'" id="applicationCspHint" class="large--eight-twelfths info-note blockquote ariadescribedby">
//                                 <cite>Enter <strong>your own National Insurance number</strong> instead of the number of the person you care for</cite>
//                             </blockquote>

//                             <!-- First Name group -->
//                             <div class="row">
//                                 <div id="_guide-item" class="col-md-12">
//                                     <div class="form-group">

//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label id="firstName-label" for="firstNameId">
//                                                     First name(s)
//                                                 </label>
//                                             </p>
//                                             <div *ngIf="isCic"
//                                                 id="firstName-describedby"
//                                                 class="form-hint ariadescribedby guideFieldDescription">
//                                                 If you’ve told us your first name has changed, tell us your new first name.
//                                             </div>
//                                         </div>

//                                         <div
//                                             [ngClass]="{'validation-failure': (applicationInfoForm.get('firstName').touched || applicationInfoForm.get('firstName').dirty) && !applicationInfoForm.get('firstName').valid }">
//                                             <input class="text form-control capitalize" type="text" id="firstNameId"
//                                                 formControlName="firstName" maxlength="71" autocomplete="off"
//                                                 placeholder="" aria-labelledby="firstName-label"
//                                                 aria-describedby="firstName-describedby" aria-required="true" />
//                                         </div>

//                                         <app-control-error [control]="applicationInfoForm.get('firstName')"
//                                             [name]="['firstName']"></app-control-error>
//                                     </div>
//                                 </div>
//                             </div>

//                             <!-- Last Name group -->
//                             <div class="row">
//                                 <div class="col-md-12">
//                                     <div class="form-group">
//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label id="lastName-label" for="lastNameId">
//                                                     Last name
//                                                 </label>
//                                             </p>
//                                             <div *ngIf="isCic"
//                                                 id="lastName-describedby"
//                                                 class="form-hint ariadescribedby guideFieldDescription">
//                                                 If you’ve told us your last name has changed, tell us your new last name.
//                                             </div>
//                                         </div>

//                                         <div
//                                             [ngClass]="{'validation-failure': (applicationInfoForm.get('lastName').touched || applicationInfoForm.get('lastName').dirty) && !applicationInfoForm.get('lastName').valid }">
//                                             <input class="text form-control capitalize" type="text" id="lastNameId"
//                                                 maxlength="36" formControlName="lastName" autocomplete="off"
//                                                 placeholder="" aria-labelledby="lastName-label"
//                                                 aria-describedby="lastName-describedby" aria-required="true" />
//                                         </div>
//                                         <app-control-error [control]="applicationInfoForm.get('lastName')"
//                                             [name]="['lastName']"></app-control-error>
//                                     </div>
//                                 </div>
//                             </div>

//                             <!-- Date Of Birth group -->
//                             <div class="row">
//                                 <div class="col-md-12">
//                                     <div class=" form-group"
//                                         [ngClass]="{'validation-failure': ((applicationInfoForm.get('dob.day').touched && applicationInfoForm.get('dob.month').touched &&applicationInfoForm.get('dob.year').touched) &&
//                                             (applicationInfoForm.get('dob').touched || applicationInfoForm.get('dob').dirty) && !applicationInfoForm.get('dob').valid) }">
//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label class="" id="dob-label">
//                                                     Date of birth
//                                                 </label>
//                                             </p>
//                                             <div class="form-hint ariadescribedby guideFieldDescription"
//                                                 id="dob-describedby">
//                                                 Enter like this: 31 03 1980<br>
//                                             </div>
//                                         </div>

//                                         <fieldset class="dob-container sg-dobinput" formGroupName="dob">
//                                             <div class="day">
//                                                 <label class="dob-label" for="dayId" id="dob-day-label">Day</label>
//                                                 <input type="tel" class="dob-field dob-day form-control" digitOnly
//                                                     formControlName="day" id="dayId" placeholder="DD" maxlength="2"
//                                                     aria-labelledby="dob-label dob-day-label" aria-required="true"
//                                                     aria-describedby="dob-describedby" />
//                                             </div>
//                                             <div class="month">
//                                                 <label class="dob-label" for="monthId"
//                                                     id="dob-month-label">Month</label>
//                                                 <input type="tel" class="dob-field dob-month form-control" digitOnly
//                                                     formControlName="month" id="monthId" maxlength="2" placeholder="MM"
//                                                     aria-labelledby="dob-label dob-month-label" aria-required="true"
//                                                     aria-describedby="dob-describedby" />
//                                             </div>
//                                             <div class="year">
//                                                 <label class="dob-label" for="yearId" id="dob-year-label">Year</label>
//                                                 <input type="tel" class="dob-field dob-year form-control" id="yearId"
//                                                     digitOnly formControlName="year" maxlength="4" placeholder="YYYY"
//                                                     aria-labelledby="dob-label dob-year-label" aria-required="true"
//                                                     aria-describedby="dob-describedby" />
//                                             </div>
//                                         </fieldset>

//                                         <div class="error-message guideFieldError"
//                                             *ngIf="(applicationInfoForm.get('dob.day').touched && applicationInfoForm.get('dob.month').touched &&applicationInfoForm.get('dob.year').touched) &&
//                                                 (applicationInfoForm.get('dob').touched || applicationInfoForm.get('dob').dirty) && !applicationInfoForm.get('dob').valid">
//                                             <ul>
//                                                 <li *ngIf="applicationInfoForm.get('dob.day').errors?.required ||
//                                                         applicationInfoForm.get('dob.month').errors?.required ||
//                                                         applicationInfoForm.get('dob.year').errors?.required">
//                                                     Enter a date of birth
//                                                 </li>
//                                                 <li *ngIf="applicationInfoForm.get('dob')?.errors?.futuredate">
//                                                     Date of birth must be in the past
//                                                 </li>
//                                                 <li *ngIf="applicationInfoForm.get('dob')?.errors?.invaliddate">
//                                                     Enter a valid date of birth
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <!-- Phone number group -->
//                             <div class="row">
//                                 <div class="col-md-12">
//                                     <div class="form-group af-field-empty">
//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label id="phoneNumber-label" for="phoneNumberId">
//                                                     Phone number
//                                                 </label>
//                                             </p>
//                                             <div *ngIf="isCic"
//                                                 id="phoneNumber-describedby"
//                                                 class="form-hint ariadescribedby guideFieldDescription">
//                                                 Enter a phone number that we can contact you on if we cannot match your
//                                                 documents to you.
//                                             </div>
//                                         </div>
//                                         <div
//                                             [ngClass]="{'validation-failure': (applicationInfoForm.get('phoneNumber').touched || applicationInfoForm.get('phoneNumber').dirty) && !applicationInfoForm.get('phoneNumber').valid }">

//                                             <input class="tel form-control digitsOnlyNoSpace" type="tel" digitOnly
//                                                 id="phoneNumberId" formControlName="phoneNumber" maxlength="21"
//                                                 autocomplete="off" aria-labelledby="phoneNumber-label"
//                                                 aria-describedby="phoneNumber-describedby" aria-required="true" />
//                                         </div>
//                                         <app-control-error [control]="applicationInfoForm.get('phoneNumber')"
//                                             [name]="['phoneNumber']"></app-control-error>
//                                     </div>
//                                 </div>
//                             </div>
//                             <!-- NI number group -->
//                             <div *ngIf="benTypeChosen !== 'CDP'" class="row">
//                                 <div class="col-md-12">
//                                     <div class=" form-group af-field-filled">
//                                         <div class="guideFieldLabel">
//                                             <p>
//                                                 <label id="nino-label" for="niNumberId">
//                                                     National Insurance number
//                                                     <span class="optional">&nbsp;(if you know it)</span>
//                                                 </label>
//                                             </p>
//                                             <div id="nino-describedby"
//                                                 class="form-hint ariadescribedby guideFieldDescription">
//                                                 It’s 9 digits long and is on your National Insurance card, benefit
//                                                 letter, payslip or P60.<br>
//                                                 For example: QQ 12 34 56 C<br>
//                                             </div>
//                                         </div>
//                                         <div
//                                             [ngClass]="{'validation-failure': (applicationInfoForm.get('nino').touched || applicationInfoForm.get('nino').dirty) && !applicationInfoForm.get('nino').valid }">
//                                             <input class="text form-control uppercase" type="text" id="ninoId"
//                                                 autocomplete="off" formControlName="nino" maxlength="13"
//                                                 aria-labelledby="nino-label" aria-describedby="nino-describedby" />
//                                         </div>
//                                         <app-control-error [control]="applicationInfoForm.get('nino')"
//                                             [name]="['nino']"></app-control-error>
//                                     </div>
//                                 </div>
//                             </div>

//                             <!-- Info group -->
//                             <div *ngIf="benTypeChosen !== 'CDP'" class="row">
//                                 <div class="col-md-12">
//                                     <div class="GDSHighlightedInformation guidefield">
//                                         <div class="guideFieldNode  guideTextDraw NINo_helptext defaultFieldLayout">
//                                             <div class="guideFieldLabel"></div>
//                                             <div class="hinfo ">
//                                                 <div class="hinfo-main">
//                                                     <span class="hinfo-icon info" aria-hidden="true"></span>
//                                                     <span class="visuallyhidden">. Highlighted information,</span>
//                                                     <p *ngIf="!isCic">If you do not let us know your National Insurance number, it
//                                                         may take longer for us to process your application.
//                                                     </p>
//                                                     <p *ngIf="isCic">If you do not let us know your National Insurance number,
//                                                         it may take longer for us to process your change of
//                                                         circumstance.
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <!-- Back and submit buttons group -->
//                             <div class="toolbar">
//                                 <div id="backbutton_copy___guide-item" class="afToolbarButton">
//                                     <div class="form-group af-field-empty">
//                                         <div id="backButton">
//                                             <button class="button-medium moveBack button button--cancel" type="button"
//                                                 aria-label="Back" (click)="goBack()">
//                                                 <span class="iconButton-icon moveBack-button-icon"></span>
//                                                 <span class="iconButton-label moveBack-button-label">
//                                                     Back
//                                                 </span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="afToolbarButton">
//                                     <div class="form-group">
//                                         <button class="next button-medium moveNext button button--primary" type="submit"
//                                             aria-label="Next">
//                                             <span class="iconButton-icon moveNext-button-icon"></span>
//                                             <span class="-label iconButton-label moveNext-button-label">
//                                                 Next
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </form>
// </div>
//     )
}

export default ApplicationInfo;