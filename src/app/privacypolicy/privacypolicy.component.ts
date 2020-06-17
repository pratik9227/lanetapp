import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css']
})
export class PrivacypolicyComponent implements OnInit {

  
  uid: any;
  uname: any;
  uemail: any;
  upic: any;
  

   constructor(private cookie: CookieService, public router: Router) { 
      
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');
    }

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
