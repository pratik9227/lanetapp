import { Component, OnInit } from '@angular/core';
import {Fpassword} from '../objects/fpassword';
import {DataService} from '../services/data.service';




@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  fpassword: Fpassword = {
    //  name: '',
      number: '',

    };

  constructor(private dataservice: DataService) { }

  log2() {

    this.dataservice.resetpass(this.fpassword).subscribe(
      result => console.log('success', result),
    error => console.log('error', error));





  }

  ngOnInit() {
  }

}
