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
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicantprofileComponent } from './applicantprofile/applicantprofile.component';
import { ApplicantPremedComponent } from './applicant-premed/applicant-premed.component';
import { ApplicantPassportComponent } from './applicant-passport/applicant-passport.component';
import { ApplicantMedicalComponent } from './applicant-medical/applicant-medical.component';
import { ApplicantTesdaComponent } from './applicant-tesda/applicant-tesda.component';
import { ApplicantJoHandlerComponent } from './applicant-jo-handler/applicant-jo-handler.component';
import { ApplicantdetailsComponent } from './applicantdetails/applicantdetails.component';
import { SearchapplicantComponent } from './searchapplicant/searchapplicant.component';
import { JodetailsComponent } from './jodetails/jodetails.component';
import { EditapplicantComponent } from './editapplicant/editapplicant.component';

const routes: Routes = [
	
	{
		path: '',
		component: LoginComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'first',
		component: FirstpageComponent,
		children:[
			{
			  path:'',
			  component: DashboardComponent,
			},
				  {
			  		  path:'home',
			  		  component:HomeComponent,
				  },
				  {
					  path: 'editprofile',
					  component: EditprofileComponent
				  },
				  {
					  path: 'changepassword',
					  component: ChangepasswordComponent
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
					path: 'agentlist',
					component: AgentslistComponent
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
					path:'searchapplicant',
					component: SearchapplicantComponent
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
					path: 'addaccount',
					component: AddaccountComponent
				},
				{
					path: 'editaccount',
					component:EditaccountComponent
				},
				{
					path: 'johandlers',
					component: JoHandlersComponent
				},
				{
					path: 'jodetails',
					component: JodetailsComponent	
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
					path: 'applicantprofile',
					component: ApplicantprofileComponent,
					children:[
						{
							path:'',
							component: ApplicantdetailsComponent
						},
						{
							path: 'applicantPremed',
							component: ApplicantPremedComponent	
						},
						{
							path: 'applicantdetails',
							component: ApplicantdetailsComponent
						},
						{
							path: 'applicantPremed',
							component: ApplicantPremedComponent	
						},
						{
							path: 'applicantPassport',
							component: ApplicantPassportComponent
						},
						{
							path: 'applicantMedical',
							component: ApplicantMedicalComponent
						},
						{
							path: 'applicantTesda',
							component: ApplicantTesdaComponent
						},
						{
							path: 'applicantJoHandler',
							component: ApplicantJoHandlerComponent
						},
						{
							path: 'editapplicant',
							component: EditapplicantComponent
						},
		
					]
				},
				
			]	
	},	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
