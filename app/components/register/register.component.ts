import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      gender: [''],
      branch: [''],
    });
  }

  register() {
    this.submitted = true;
    this.loading = true;
    console.log(this.form.value);
    if (this.authService.registerUser(this.form.value)) {
      alert('User Register Successfully');
      this.router.navigate(['login']);
    } else {
      alert('error');
    }
  }
}
