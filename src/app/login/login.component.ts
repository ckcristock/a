import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth-service.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }
  get form() {
    return this.signinForm.controls;
  }

  onSubmit() {
    this.authService.loginUser(this.form.email.value, this.form.password.value)
      .subscribe(
        data => {
        },
        error => {
        });
  }
}