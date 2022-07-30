import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { GET_USERS } from 'src/graphQL/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apollo: Apollo,

  ) { }

  public Get_User():  Observable<[any]>{
    return new Observable<[any]>((observer) => {
      let userList:any = [];
      this.apollo.query({ query: GET_USERS }).subscribe((data: any) => {
      let users = data.data
      
      Object.values(users.users).map((user: any) => {
        
        userList.push({
          id: user.id,
          username: user.username,
          password: user.password
        })

      })
      observer.next(userList)
      observer.complete();
      })
    })
  }
  
}
