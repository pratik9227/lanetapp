import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Updateuser } from '../objects/updateuser';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  userInfo: any;
  uid: any;
  uname: any;
  uemail: any;
  upic: any;
  res1: any;
  //formData:FormData;
  file: File
  // payload: Updateuser = {
  //   fullName: '',
  //   mobileNumber: '',
  //   email: '',
  //   country: ''
  // };
  payload = {
    fullName: ''
  };

  constructor(public router: Router, private dataservice: DataService, private cookie: CookieService) {
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('uid');

    this.userInfo = {
      uid: this.cookie.get('uid'),
      uname: this.cookie.get('uname'),
      uemail: this.cookie.get('uemail')
    }

    // this.userEditForm = this.formBuilder.group({
    //   profile: ['']
    // });
  }

  ngOnInit() {
    this.payload = {
      fullName: this.userInfo.uname
      // mobileNumber: '',
      // email: this.userInfo.uemail,
      // country: ''
    };
  }

  // onFileSelect(event) {
  //    
  //   if (event.target.files.length > 0) {
  //     this.file = event.target.files[0];
  //     // this.userEditForm.get('profile').setValue(file);
  //   }
  // }

  // onSubmit() {
  //    
  //   //let copy = Object.assign({}, myObject)
  //   const formData = new FormData();
  //    
  //   let profile = this.file;
  //   formData.append('Document', profile);
  //    

  //   this.payload = {
  //     fullName: this.userInfo.uname,
  //     mobileNumber: '',
  //     email: this.userInfo.uemail,
  //     country: ''
  //   };
  //   let data = JSON.stringify(this.payload)
  //   formData.append('ClientId', data);

  //    

  //   this.dataservice.updateuser(formData).subscribe(
  //     (result) => {
  //       this.res1 = result;
  //       //  this.cookie.set('uid', result.data);
  //       //  this.cookie.set('utoken', result.data.token)
  //       if (this.res1.type === 'error') {
  //         alert(this.res1.message)
  //       } else {

  //         this.router.navigateByUrl('/dashboard');
  //       }

  //       console.log('success', result);
  //     },
  //     (error) => { console.log('error', error) }
  //   );
  // }

  fileChange(event) {

    let fileList: FileList = event.target.files;
    this.file = fileList[0];
    console.log(this.file);
    console.log(JSON.stringify(this.payload));
    // let formData = new FormData();  
    //  formData.append('Document',file);  
    //  console.log(formData);
    //  this.formData.append('ClientId', this.iddata ) ;  
    //  console.log(this.formData);
  }

  upload() {

    let formData = new FormData();
    formData.append('file', this.file);
    // debugger
    // this.payload = {
    //   fullName: this.userInfo.uname,
    //   mobileNumber: '',
    //   email: this.userInfo.uemail,
    //   country: ''
    // };

    // this.payload = {
    //   fullName: this.userInfo.uname
    // };
    formData.append('payload', JSON.stringify(this.payload));

    console.log(formData);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    this.dataservice.updateuser(formData).subscribe(
      (result) => {
        this.res1 = result;
        //  this.cookie.set('uid', result.data);
        //  this.cookie.set('utoken', result.data.token)
        if (this.res1.type === 'error') {
          alert(this.res1.message)
        } else {
            alert(this.res1.message);
          this.router.navigateByUrl('/dashboard');
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
}
