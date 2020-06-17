import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Otp} from '../objects/otp';
import {DataService} from '../services/data.service';
import {CookieService} from 'ngx-cookie-service';
import {RegisterComponent} from '../register/register.component';
import {Nuser} from '../objects/nuser';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

xyz: Nuser;
zxy: Nuser;

mvp: string = '45455455';
  constructor(public router: Router, private dataservice: DataService,  private cookie: CookieService, private rcomp: RegisterComponent) { 
     this.xyz = this.dataservice.sharephone();
  // this.varia = JSON.stringify(this.xyz.phone);
    this.varia = this.xyz.phone;
    console.log(this.varia );

  }

   varia: string;
// xyz: string = this.rcomp.nusers.phone; 

// data(){
//      this.xyz = this.dataservice.sharephone();
//    this.varia = JSON.stringify( this.xyz.phone);
//   // JSON.stringfy(new String(this.varia));
//     console.log(this.varia );
// }


  otp: Otp = {
    //  name: '',
      otp: '',
      phone: ''
    };
  user: any;
  

 res2: any;
 res3: any;

 verotp() {
// console.log(this.varia); 
  console.log(this.otp);
 this.otp.phone = this.varia;
 console.log(this.otp);
  this.dataservice.otpverify(this.otp).subscribe(
   (result) => {
     this.res2 = result;
     this.cookie.set('otp', result.data.token )
     if (this.res2.type === 'error')
    {
       // alert (this.res2.message)
        alert (this.res2.message)
    } else {
      
   this.dataservice.twofa().subscribe(
   (result) => {
     this.res3 = result;
     this.cookie.set('authurl', result.data.url)
     if (this.res3.type === 'error')
    {
        alert (this.res3.message)
    } else {
        this.router.navigateByUrl('/twofa');
    }

     console.log('success', result);
    },
  (error) => {console.log('error', error)}
)
}

     console.log('success', result);
    },
  (error) => {console.log('error', error)}
);

  }
  ngOnInit() {
  //  this.data()
//  this.xyz = this.dataservice.sharephone();
// console.log(this.xyz);


  }

}
