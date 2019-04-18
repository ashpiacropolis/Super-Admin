import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branchdetails',
  templateUrl: './branchdetails.component.html',
  styleUrls: ['./branchdetails.component.css']
})
export class BranchdetailsComponent implements OnInit {

 constructor(private router: Router){
  }

  public onbranchdetailsClick(){
      this.router.navigate(['./editbranch']);
  }


  ngOnInit() {
  }

}
