import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  //userList ;

  constructor(private httpService: HttpClient) {}

  getUserList() {
    let userURL = "https://jsonplaceholder.typicode.com/users";

    let userListObservable: Observable<any>;

    userListObservable = this.httpService.get(userURL);

    return userListObservable;
  }
}
