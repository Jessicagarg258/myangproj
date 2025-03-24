import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as bcrypt from 'bcryptjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = 'http://localhost:8083/demosprboot/api/auth';
  user: any;

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(this.user.password, salt);

    const userData = {
      username: this.user.username,
      password: hashedPassword, // Send hashed password
      role: this.user.role,
    };
    return this.http.post(`${this.baseUrl}/register`, userData);
  }
  login(user: any): Observable<any> {
    console.log(user);

    return this.http.post(`${this.baseUrl}/login`, user);
  }
}
