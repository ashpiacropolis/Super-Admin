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
    AgentslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
