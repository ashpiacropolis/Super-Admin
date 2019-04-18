import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
{
	path: 'home',
	component:HomeComponent
},
{
	path: 'editprofile',
	component:EditprofileComponent
},
{
	path: 'agents',
	component:AgentsComponent
},
{
	path: 'addagent',
	component:AddagentComponent
},
{
	path: 'agentdetail',
	component:AgentdetailComponent
},
{
	path: 'applicants',
	component:ApplicantsComponent
},
{
	path: 'addapplicant',
	component:AddapplicantComponent
},
{
	path: 'branches',
	component:BranchesComponent
},
{
	path: 'branchedetails',
	component:BranchdetailsComponent
},
{
	path: 'editbranch',
	component:EditbranchComponent
},
{
	path: 'addbranch',
	component:AddbranchComponent
},
{
	path: 'accounts',
	component:AccountsComponent
},
{
	path: 'accountdetail',
	component:AccountdetailsComponent
},
{
	path: 'editaccount',
	component:EditaccountComponent
},
{
	path: 'addaccount',
	component: AddaccountComponent
},
{
	path: 'johandlers',
	component: JoHandlersComponent
},
{
	path: 'addjo',
	component: AddJoHandlersComponent
},
{
	path: 'providejo',
	component: ProvideJoComponent
},
{
	path: 'sms',
	component: SmsComponent
},
{
	path: 'editsms',
	component: EditsmsComponent
},
{
	path: 'agentlist',
	component: AgentslistComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
