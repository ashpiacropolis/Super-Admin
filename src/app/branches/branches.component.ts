import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

constructor(private router: Router){
  }

  public onbranchesClick(){
      this.router.navigate(['./branchedetails']);
  }

  ngOnInit() {
  }

}
