import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agentslist',
  templateUrl: './agentslist.component.html',
  styleUrls: ['./agentslist.component.css']
})
export class AgentslistComponent implements OnInit {

  constructor(private router: Router){
  }

  public onagentlistClick(){
      this.router.navigate(['./agentdetail']);
  }

  ngOnInit() {
  }

}
