import { Component, OnInit } from '@angular/core';
import { Nuser } from '../objects/nuser';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  res: any;
  nusers: Nuser = {
    country: '',
    email: '',
    fullname: '',
    password: '',
    phone: '',
    role: 'CUSTOMER'
    // referid: ''
  };

  countrylist: any;
  constructor(private dataservice: DataService, public router: Router) { }

  regu() {
    this.dataservice.sharedata(this.nusers);

     
    this.dataservice.registeruser(this.nusers).subscribe(
      (result) => {
        this.res = result;
         
        if (this.res.type === 'error') {
          alert(this.res.message)
        } else {

          this.router.navigateByUrl('/otp');
        }

        console.log('success', result);
      },
      (error) => { console.log('error', error) }
    );



  }


  ngOnInit() {
     
    this.dataservice.countrylist().subscribe((mlist: any) => {
              
      this.countrylist = mlist.data, console.log(this.countrylist)
    });

  }


  //     this.dataservice.currencylist().subscribe((mlist: any) => {
              
  //     this.countrylist = mlist.data.code;
      
  //      console.log(this.countrylist)
  //   });
  // }

}
