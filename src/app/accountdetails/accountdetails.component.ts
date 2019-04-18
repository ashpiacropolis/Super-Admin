import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css']
})
export class AccountdetailsComponent implements OnInit {

  constructor(private router: Router){
  }

  public onaccountdetailsClick(){
      this.router.navigate(['./editaccount']);
  }

  ngOnInit() {
  }

}
