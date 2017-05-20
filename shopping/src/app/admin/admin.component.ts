import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AdminService} from './admin.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [AdminService]
})
export class AdminComponent implements OnInit {
private loginForm : FormGroup;
  constructor(private adminService : AdminService,private route : Router) { }

  ngOnInit() {
	  this.loginForm = new FormGroup({
		  email : new FormControl(null,[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
		  password : new FormControl(null,[Validators.required,
		  Validators.minLength(3),Validators.maxLength(20)
		  ])
		  
	  });
  }
  
  checkLogin(){
	  console.log(this.loginForm.value)
	  if(this.adminService.checkLogin(this.loginForm.value.email,this.loginForm.value.password)){
		  console.log("correct login");
		  this.route.navigate(['/adminhome']);
	  }
	  else{
		  console.log("incorrect Login");
		  this.route.navigate(['']);
	  }
  }

}
