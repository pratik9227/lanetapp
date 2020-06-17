import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 asd: any;
 uid: any;
 uname: any;
 uemail: any;
 upic: any;

  constructor(private cookie: CookieService, public router: Router) {
    this.asd = this.cookie.get('uactive')
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');
  }
  
  logout(){
    this.cookie.deleteAll(); 
    this.router.navigateByUrl('/home');
  }


  

  ngOnInit() {
    
    //  this.asd = this.cookie.get('uactive');
  }

}
