import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.user).subscribe(
      (response: any) => {
        console.log(response);
        localStorage.setItem('userToken', response);
        alert('Login Successful!');
        this.router.navigate(['/emplist']);
      },
      () => alert('Invalid Credentials')
    );
  }

}
