import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/auth.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.sass']
})
export class SignFormComponent implements OnInit {
  @Output() closePopUp = new EventEmitter<boolean>();

  public loginForm;
  public registrationForm;
  public showLogin = true;

  constructor(private formBuilder: FormBuilder, private authService: AuthService,) {
    this.loginForm = this.formBuilder.group({
      login: [''],
      password: ['']
    });
    this.registrationForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required ]
    }, {validator: this.checkPasswords });
  }

  ngOnInit() {
  }

  switchForms(val) {
    this.showLogin = val;
  }
  authWithGoogleClick() {
    this.authService.authUserWithGoogle();
    this.closePopUp.emit(false);
  }
  loginFormSubmit(creds) {
    const { login, password } = creds;
    this.authService.authUserWithCred(login, password, this.closePopUp);
    this.loginForm.reset();
    this.closePopUp.emit(false);

  }

  createNewUser(creds) {
    console.log(creds)
    const { login, password } = creds;
    this.authService.createNewUser(login, password, ).then(res => console.log(res));


  }
  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

}
