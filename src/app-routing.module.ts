import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EvidenceSubmissionComponent } from "./evidence-submission/evidence-submission.component";
import { ApplicationInfoComponent } from "./application-info/application-info.component";
import { ApplicantAddressComponent } from "./applicant-address/applicant-address.component";
import { UploadDocumentsComponent } from "./upload-documents/upload-documents.component";
import { DocUploadConfirmationComponent } from "./doc-upload-confirmation/doc-upload-confirmation.component";
import { ReasonForSendingComponent } from './reason-for-sending/reason-for-sending.component';
import { routesNames } from "./routes.names";
import { FormsGuard } from "./shared/forms.guard";


const routes: Routes = [
  {
    path: routesNames.EVIDENCE_SUBMISSION,
    component: EvidenceSubmissionComponent
  },
  {
    path: routesNames.REASON_FOR_SENDING,
    component: ReasonForSendingComponent, 
    canActivate: [FormsGuard]
  },
  {
    path: routesNames.APPLICATION_INFO,
    component: ApplicationInfoComponent, 
    canActivate: [FormsGuard]
  },
  {
    path: routesNames.APPLICANT_ADDRESS,
    component: ApplicantAddressComponent, 
    canActivate: [FormsGuard]
  },
  {
    path: routesNames.UPLOAD_DOCUMENTS,
    component: UploadDocumentsComponent, 
    canActivate: [FormsGuard]
  },
  {
    path: routesNames.DOC_UPLOAD_CONFIRMATION,
    component: DocUploadConfirmationComponent, 
    canActivate: [FormsGuard]
  },
  { 
    path: "", 
    redirectTo: 
    routesNames.EVIDENCE_SUBMISSION, 
    pathMatch: "full" 
  },
  { 
    path: "**", 
    redirectTo: routesNames.EVIDENCE_SUBMISSION, 
    pathMatch: "full" 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    scrollPositionRestoration: "top"
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
