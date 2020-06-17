import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payload } from '../objects/payload';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from '../Constants';

declare var $: any;
import { FormBuilder, FormGroup } from "@angular/forms";
//constant file

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.css'],
  providers: [Constants]
})
export class KycComponent implements OnInit {

  uid: any;
  uname: any;
  uemail: any;
  upic: any;
  documentType: any;


  constructor(public router: Router, private dataservice: DataService, private cookie: CookieService, private constants: Constants) {
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');

    this.documentType = this.constants.docType;
  }

  res1: any;
  //formData:FormData;
  images: File = null;
  payload: Payload = {

    docType: '',
    docId: ''
  };

  fileChange(fileList: FileList) {
    // debugger
    this.images = fileList.item(0);
  };

  upload() {
    // debugger
    // let formData = new FormData();
    // debugger
    // formData.append('files', this.images);//this.images
    // formData.append('payload', JSON.stringify(this.payload));

    let payloadDetails = JSON.stringify(this.payload);
    console.log("image------>",this.images,"---------->>>",payloadDetails)
    this.dataservice.kyc(this.images, payloadDetails).subscribe(
      (result) => {
        this.res1 = result;
        if (this.res1.type === 'error') {
          alert(this.res1.message)
        } else {
          alert(this.res1.message);
          this.router.navigateByUrl('/dashboard');
        }
        console.log('success', result);
      },
      (error) => {
        // debugger
        console.log('error', error);
      }
    );
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/home');
  }

  ngOnInit() { }
  goToViewKyc(pageName) {
    this.router.navigate([`${pageName}`]);

  }

}
