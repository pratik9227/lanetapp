import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Changepw } from '../objects/changepw';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  uid: any;
  uname: any;
  uemail: any;
  upic: any;
   res: any;
  cpw: Changepw = {
    newPassword: '',
    password: ''   
 };

    constructor(private cookie: CookieService, public router: Router, private dataservice: DataService) { 
      
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');
    }

    upload1() {
    
    this.dataservice.changepw(this.cpw).subscribe(
      (result) => {
        this.res = result;
         
        if (this.res.type === 'error') {
          alert(this.res.message)
        } else {
          alert(this.res.message)
          // this.router.navigateByUrl('/otp');
          console.log(this.res.message);
        }

        console.log('success', result);
      },
      (error) => { console.log('error', error) }
    );  } 

    logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/home');
  }

  //redirects to Profile page of user.
  goToViewProfile(pageName) {
    this.router.navigate([`${pageName}`]);
  }

  ngOnInit() {
  }

}