import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cryptolist',
  templateUrl: './cryptolist.component.html',
  styleUrls: ['./cryptolist.component.css']
})

export class CryptolistComponent implements OnInit {

  
  uid: any;
  uname: any;
  uemail: any;
  upic: any;
  cryptolist:any;


    constructor(private dataservice: DataService, private cookie: CookieService, public router: Router) { 
      
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
        this.dataservice.cryptolist().subscribe((mlist: any) => {
              
      this.cryptolist = mlist.data, console.log(this.cryptolist)
    });

  }

}
