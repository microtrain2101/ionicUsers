import { Injectable } from '@angular/core';
// 1. Import HttpHeaders, this will allow us to POST JSON data
import { HttpClient, HttpHeaders } from '@angular/common/http';

// 2. Import Observable 
import { Observable } from 'rxjs';

// 3. Import User
import { User } from './user.model';

// 2. Create a JSON header
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    // 3. Add URL as an instance variable
    private url:string = 'http://localhost:3000/api/auth';

  constructor(
    // 5. Inject HttpClient into the constructor
    private http:HttpClient
  ) { }

  // test(): string{
  //   return 'success!';
  // }
  //Return an Observable array or User objects
  // test(): Observable<User[]>{        // 2. Add FormsModule to the imports list
        FormsModule

  //   let url = 'http://localhost:3000/api/users'
    //Make a get request over HTTP
    // return this.http.get<User[]>(url);
  // 4. Change test() to login() and accept a user object as an argument
  // 5. Expect a User object instead of an array of User objects
  // 6. Change from a GET to a POST request
  // 7. Pass the user object and the HTTP headers into the POST request
  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/login`, user, httpOptions);
  }
}
