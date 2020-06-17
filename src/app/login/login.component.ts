import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Euser} from '../objects/euser';
import {DataService} from '../services/data.service';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  eusers: Euser = {
    //  name: '',
      email: '',
      password: ''
    };
  user: any;

 res1: any;

 //xyz: boolean = false;

  constructor(public router: Router, private dataservice: DataService,private cookie: CookieService, private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
    this.user = userData;
    console.log(this.user);
       });
  }

  log() {
     console.log(this.eusers);
     
     this.dataservice.loginuser(this.eusers).subscribe(
      (result) => {
        this.res1 = result;
    //  this.cookie.set('uname', result.data.user.fullName);
    //  this.cookie.set('uemail', result.data.user.email);
    //  this.cookie.set('upic', result.data.user.pic);
    //  this.cookie.set('uid', result.data.user.id);
    //  this.cookie.set('utoken', result.data.token);
    //  this.cookie.set('utwofa', result.data.user.is2FAEnabled);
    //  this.cookie.set('uactive', result.data.user.isActive);
        if (this.res1.type === 'error')
       {
           alert (this.res1.message)
        } else {
          if (result.data.user instanceof Object) {
            localStorage.setItem("token", result.data.token)
            this.cookie.set('uname', result.data.user.fullName);
            this.cookie.set('uemail', result.data.user.email);
            this.cookie.set('upic', result.data.user.pic);
            this.cookie.set('uid', result.data.user.id);
            this.cookie.set('utoken', result.data.token);
            this.cookie.set('utwofa', result.data.user.is2FAEnabled);
            this.cookie.set('uactive', result.data.user.isActive);
          }
           // window.location.href = "/twofa"
           this.router.navigateByUrl('/twofa');
         //  this.router.navigateByUrl('/dashboard');
       }
 
        console.log('success', result);
       },
     (error) => {console.log('error', error)}
  );

  }

  ngOnInit() {
  }

}
