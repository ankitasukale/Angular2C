import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  login(formData: any) {
    // console.log(formData.value);
    // let data = this.authService.loginUser(formData.value);
    // console.log(data);
    if (this.authService.loginUser(formData.value)) {
      alert('Login Successful');
      this.router.navigate(['profile']);
    } else {
      alert('Login Failed');
    }
  }
}
