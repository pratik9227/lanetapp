import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

uid: any;
uname: any;
uemail: any;
upic: any;
  constructor(private cookie: CookieService) {

        
this.uname = this.cookie.get('uname');
this.uemail = this.cookie.get('uemail');
this.uid = this.cookie.get('upic');
   }

  ngOnInit() {
  }

}
