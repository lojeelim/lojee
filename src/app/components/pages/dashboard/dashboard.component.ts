import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private userService: UserService

  ) { }

  public users: any  = []
  
  async getUserList(){
      await this.userService.getUserList().subscribe((user: any) => {
      if(user){
        Object.values(user).map((u: any) =>{
          this.users.push({
            id: u.id,
            username: u.username,
            password: u.password
          })
        })
      }
    })
  }

  ngOnInit(): void {
    this.getUserList()
  }

}
