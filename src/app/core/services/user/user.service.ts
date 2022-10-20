import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { observable, Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user/user.model';
import { getUser, addUser } from 'src/graphQL/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apollo: Apollo,

  ) { }

  public  getUserList():  Observable<[any]>{
    return  new Observable<[any]>((observer) => {
      let userList:any = [];
      this.apollo.query({ query: getUser }).subscribe((data: any) => {
      let users = data.data
      userList = Object.values(users.users).map((user: any) => {
          return user
      })
      observer.next(userList)
      observer.complete();
      })
    })
  }

  public addNewUser(user: UserModel): Observable<[any]>{
    return new Observable<[any]> ((observer) =>{
      this.apollo.mutate({
        mutation: addUser,
        variables: {
          Username: user.Username,
          Password: user.Password
        }
      }).subscribe((data:any) =>{
        observer.next(data);
        observer.complete();
      },
      error =>{
        observer.next([error.error]);
        observer.complete();
      })
    })
  }
  
}
