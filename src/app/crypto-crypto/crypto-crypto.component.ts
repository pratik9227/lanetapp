import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Cryptodata } from '../objects/cryptodata';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-crypto-crypto',
  templateUrl: './crypto-crypto.component.html',
  styleUrls: ['./crypto-crypto.component.css']
})
export class CryptoCryptoComponent implements OnInit {

   uid: any;
  uname: any;
  uemail: any;
  upic: any;
  currencylist: any;

   res: any;
  cdata: Cryptodata = {
    address: '',
    amount: '',
    from: '',
    to: ''
    
  };

    constructor(private cookie: CookieService, public router: Router, private dataservice: DataService) { 
      
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');
    }


     regu() {

     
    this.dataservice.cryptocrpto(this.cdata).subscribe(
      (result) => {
        this.res = result;
         
        if (this.res.type === 'error') {
          alert(this.res.message)
        } else {
         alert(this.res.message)
          console.log(this.res.message);
        }

        console.log('success', result);
      },
      (error) => { console.log('error', error) }
    );



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

      this.dataservice.currencylist().subscribe((mlist: any) => {
              
      this.currencylist = mlist.data, console.log(this.currencylist)
    });

  }

}