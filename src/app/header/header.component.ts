import { Component, OnInit } from '@angular/core';

import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  title = 'LanetBit-app';
  value: any;
  xyz: boolean = true;
  asd: any;
  uid: any;
  uname: any;
  uemail: any;
  upic: any;

  constructor(private cookie: CookieService, private router:Router) {
    this.asd = this.cookie.get('uactive');
        this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = "http://54.93.208.236:8080/"+this.cookie.get('upic');
    console.log(this.uid);
  }

  ngOnInit(){
    console.log("123")  
  }

  logout(){
      this.cookie.deleteAll(); 
      localStorage.clear()
      this.router.navigateByUrl('/home');
  }
 
  goToViewProfile(pageName) {
      this.router.navigate([`${pageName}`]);
  }


}
