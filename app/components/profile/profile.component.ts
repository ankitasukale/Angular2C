import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: any;
  constructor(private router: Router, private authService: AuthService) {
    this.userData = this.authService.getProfile();
  }

  ngOnInit(): void {}

  logout() {
    if (this.authService.logout()) {
      alert('Logout Successfully');
      this.router.navigate(['login']);
    }
  }
}
