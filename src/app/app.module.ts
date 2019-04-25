import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AgentsComponent } from './agents/agents.component';
import { AddagentComponent } from './addagent/addagent.component';
import { AgentdetailComponent } from './agentdetail/agentdetail.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { AddapplicantComponent } from './addapplicant/addapplicant.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchdetailsComponent } from './branchdetails/branchdetails.component';
import { EditbranchComponent } from './editbranch/editbranch.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountdetailsComponent } from './accountdetails/accountdetails.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { JoHandlersComponent } from './jo-handlers/jo-handlers.component';
import { AddJoHandlersComponent } from './add-jo-handlers/add-jo-handlers.component';
import { ProvideJoComponent } from './provide-jo/provide-jo.component';
import { SmsComponent } from './sms/sms.component';
import { EditsmsComponent } from './editsms/editsms.component';
import { AgentslistComponent } from './agentslist/agentslist.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { LoginComponent } from './login/login.component'; 
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EditjoComponent } from './editjo/editjo.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { EditagentComponent } from './editagent/editagent.component';
import { EditapplicantComponent } from './editapplicant/editapplicant.component';
import { SearchapplicantComponent } from './searchapplicant/searchapplicant.component';
import { JodetailsComponent } from './jodetails/jodetails.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantPremedComponent } from './applicant-premed/applicant-premed.component';
import { ApplicantPassportComponent } from './applicant-passport/applicant-passport.component';
import { ApplicantMedicalComponent } from './applicant-medical/applicant-medical.component';
import { ApplicantTesdaComponent } from './applicant-tesda/applicant-tesda.component';
import { ApplicantJoHandlerComponent } from './applicant-jo-handler/applicant-jo-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopnavComponent,
    HomeComponent,
    EditprofileComponent,
    AgentsComponent,
    AddagentComponent,
    AgentdetailComponent,
    ApplicantsComponent,
    AddapplicantComponent,
    BranchesComponent,
    BranchdetailsComponent,
    EditbranchComponent,
    AddbranchComponent,
    AccountsComponent,
    AccountdetailsComponent,
    EditaccountComponent,
    AddaccountComponent,
    JoHandlersComponent,
    AddJoHandlersComponent,
    ProvideJoComponent,
    SmsComponent,
    EditsmsComponent,
    AgentslistComponent,
    ChangepasswordComponent,
    LoginComponent,
    FirstpageComponent,
    EditjoComponent,
    ApplicantdetailsComponent,
    EditagentComponent,
    EditapplicantComponent,
    SearchapplicantComponent,
    JodetailsComponent,
    FooterComponent,
    DashboardComponent,
    ApplicantprofileComponent,
    ApplicantPremedComponent,
    ApplicantPassportComponent,
    ApplicantMedicalComponent,
    ApplicantTesdaComponent,
    ApplicantJoHandlerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
