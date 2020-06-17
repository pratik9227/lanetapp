import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {CookieService} from 'ngx-cookie-service';
import {Tfaopt} from '../objects/tfaotp';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';




@Component({
  selector: 'app-twofa',
  templateUrl: './twofa.component.html',
  styleUrls: ['./twofa.component.css']
})
export class TwofaComponent implements OnInit {
 
 res: any;
 asd: any;

  constructor(private cookie: CookieService, private dataservice: DataService, public router: Router) { }

    otp2: Tfaopt = {
      token: '',
 
    };

  authur: string = this.cookie.get('authurl');
   
 // authur: string = 'otpauth://totp/lanetbit:lewis@gmail.com?issuer=lanetbit&secret=HF2DGWTGM4%3D%3D%3D%3D%3D%3D'
   
 

elementType : 'url';
value : string = this.authur;

sub(){

    console.log(this.otp2);
    this.dataservice.twofa1(this.otp2).subscribe(
     (result) => {
       this.res = result;
        this.cookie.set('nuid', result.data)
       if (this.res.type === 'error')
      {
          alert (this.res.message)
      } else {
          this.cookie.delete('authurl');
          this.router.navigateByUrl('/login');
      }

       console.log('success', result);
      },
    (error) => {console.log('error', error)}
    );

};

sub2(){

    console.log(this.otp2);
    this.dataservice.twofa2(this.otp2).subscribe(
     (result) => {
       this.res = result;
        this.cookie.set('nuid', result.data)
       if (this.res.type === 'error')
      {
          alert (this.res.message)
      } else {

          this.router.navigateByUrl('/dashboard');
          window.location.href = '/dashboard'
      }

       console.log('success', result);
      },
    (error) => {console.log('error', error)}
    );

};






  ngOnInit() {
 this.asd = this.cookie.get('uactive');

  }

}
