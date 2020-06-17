import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Security} from '../objects/security';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';




@Component({
  selector: 'app-accountsecurity',
  templateUrl: './accountsecurity.component.html',
  styleUrls: ['./accountsecurity.component.css']
})
export class AccountsecurityComponent implements OnInit {
 zaq: any ; 
 qwe: any;
 res1: any;
 uid: any;
uname: any;
uemail: any;
upic: any;
   security: Security = {
    //  name: '',
      is2FAEnabled: true,
      isActive: true 
    };

  constructor(private cookie: CookieService, public router: Router, private dataservice: DataService) {
    
this.uname = this.cookie.get('uname');
this.uemail = this.cookie.get('uemail');
this.uid = this.cookie.get('upic');
this.zaq = this.cookie.get('utwofa');

   }

 update(){
    console.log(this.zaq);

    if (this.zaq = true) {
      console.log(this.zaq);
      this.security.is2FAEnabled = false ;
      this.dataservice.update(this.security).subscribe(
      (result) => {
        this.res1 = result;

        if (this.res1.type === 'error')
       {
           alert (this.res1.message)
       } else {
          console.log('success', result);
           this.router.navigateByUrl('/dashboard');
       }
 
        console.log('success', result);
       },
     (error) => {console.log('error', error)}
  );
}
 else {
      this.security.is2FAEnabled = true;

 this.dataservice.update(this.security).subscribe(
      (result) => {
        this.res1 = result;

        if (this.res1.type === 'error')
       {
           alert (this.res1.message)
       } else {
          console.log('success', result);
           this.router.navigateByUrl('/dashboard');
       }
 
        console.log('success', result);
       },
     (error) => {console.log('error', error)}
  );

 }
  

    }
    
 
 logout(){
this.cookie.deleteAll(); 
this.router.navigateByUrl('/home');


}
 
  ngOnInit() {
    this.zaq = this.cookie.get('utwofa');
    this.qwe = this.cookie.get('uactive');
    console.log(this.zaq);
    
  }

}