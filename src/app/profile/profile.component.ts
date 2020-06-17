import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 
  userInfo: any;
  userdetail: any;
uid:any;
uimage: any;
  constructor(public router: Router, public dataService: DataService, private cookie: CookieService) {
    
    
    this.uid = "http://54.93.208.236:8080/"+this.cookie.get('upic');
    this.userInfo = {
      
      uname: this.cookie.get('uname'),
      uemail: this.cookie.get('uemail'),
      
    }
  }

  ngOnInit() {

    this.dataService.userdetail().subscribe((mlist: any) => {   
      this.userdetail = mlist.data;
      this.uimage = "http://54.93.208.236:8080/"+this.userdetail.pic;
       console.log(this.userdetail);
       console.log(this.uimage);
    });
  }

  goToEditProfile(pageName) {
    this.router.navigate([`${pageName}`]);

  }
}
