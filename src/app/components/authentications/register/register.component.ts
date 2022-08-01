import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserModel } from '../../models/user/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }
  public userModel: UserModel = {
    Username: "",
    Password: ""
  }
  public signIn(){
    this.userService.addNewUser(this.userModel).subscribe((data: any) =>{
      if(data){
        console.log(data)
        console.log("register")
      }
    })
  }
  ngOnInit(): void {
   
  }

}
