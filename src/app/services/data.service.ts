import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Euser } from '../objects/euser';
import { Nuser } from '../objects/nuser';
import { Cryptodata } from '../objects/cryptodata';
import { Security } from '../objects/security';
import { Fpassword } from '../objects/fpassword';
import { Otp } from '../objects/otp';
import { Bankdetails } from '../objects/bankdetails';
import { Changepw } from '../objects/changepw';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { Tfaopt } from '../objects/tfaotp';

declare var $: any;

const AppURL = "http://54.93.208.236:8080/api/v1/";
const BaseURL = "http://54.93.208.236:8080/";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  t: string;
  headers_object: any;
  qwe: Nuser;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  //   const httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  get getAuthStatus() {

    this.isLoggedIn = this.cookie.get('uid') == "true" ? true : false;
    return this.isLoggedIn;
  }


  loginuser(us: Euser): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'pratik'
      })
    };
    return this.http.post(AppURL + 'auth/login', us, httpOptions);
  }

  registeruser(us: Nuser): Observable<any> {
    return this.http.post(AppURL + 'auth/signup', us);
  }



  sharedata(us: Nuser) {
    this.qwe = us;
    //  return this.qwe;
  }

  sharephone() {
    //this.qwe = us;
    return this.qwe;
  }


  resetpass(us: Fpassword): Observable<any> {
    return this.http.post(AppURL + 'auth/otp/send', us);
  }

  otpverify(us: Otp): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(AppURL + 'auth/phone_verify', us, httpOptions);
  }

  countrylist(): Observable<any> {
    return this.http.get(AppURL + 'assets/countries.json');
  }



  currencylist(): Observable<any> {

     this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.get(AppURL + 'exchange/crypto-to-crypto/currencies', httpOptions);
  }

    cryptolist(): Observable<any> {

     this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.get(AppURL + 'exchange/crypto-to-crypto/tx', httpOptions);
  }



  userdetail(): Observable<any> {

     this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.get(AppURL + 'users/me', httpOptions);
  }


  twofa(): Observable<any> {
    this.t = this.cookie.get('otp');
    console.log(this.t);
    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.post(AppURL + 'users/2fa', null, httpOptions);
  }

  twofa1(us: Tfaopt): Observable<any> {

    this.t = this.cookie.get('otp');
    console.log(this.t);
    console.log(us)
    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.put(AppURL + 'users/2fa', us, httpOptions);

  }

  twofa2(us: Tfaopt): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);
    console.log(us)
    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.put(AppURL + 'users/2fa', us, httpOptions);

  }

  instruments(): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.get(AppURL + 'exchange/instruments', httpOptions);
  }

  instrumentstwo(startDate?,endDate?,type?,count?): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);

    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };
   
    return this.http.get(AppURL + 'exchange/instruments/btc_usd/history?startDate=2020-02-29T03%3A22%3A59&endDate=2020-05-05T09%3A23%3A59&type=1d&count=100', httpOptions);
  }

  kyc(image: File, payloadDetails: string): Observable<any> {
    // debugger
    this.t = this.cookie.get('utoken');
    let formData = new FormData();
    // debugger
    formData.append('file', image);//this.images
    formData.append('payload', payloadDetails);

    this.headers_object = new HttpHeaders({
      'Authorization': `Bearer ${this.t}`,
      // 'Content-Type': 'multipart/form-data'
    });

    const httpOptions = {
      "method": "POST",
      "timeout": 0,
      "headers": this.headers_object,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false
    };
    return this.http.post(AppURL + 'users/kyc', formData, httpOptions);
    // return this.http.post(AppURL + 'users/kyc', formData, httpOptions);
  }

  updateuser(data: any): Observable<any> {
    this.t = this.cookie.get('utoken');

    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    for (var pair of data.entries()) {

      console.log(pair[0] + ', ' + pair[1]);
    };

    for (var value of data.values()) {

      console.log(value);
    }

    return this.http.put(AppURL + 'users/me', data, httpOptions);
  }

  update(us: Security): Observable<any> {
    this.t = this.cookie.get('utoken');
    console.log(this.t);
    console.log(us)
    //  this.headers_object = new HttpHeaders().set("Authorization", "Bearer " + this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object,
      "mimeType": "multipart/form-data"
    };

    return this.http.put(AppURL + 'users/settings', us, httpOptions);
  }

  bankupload(us: Bankdetails): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.post(AppURL + 'users/bank', us, httpOptions);
  }

changepw(us: Changepw): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.post(AppURL + 'users/password', us, httpOptions);
  }

cryptocrpto(us: Cryptodata): Observable<any> {

    this.t = this.cookie.get('utoken');
    console.log(this.t);

    this.headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.t}`
    });
    const httpOptions = {
      headers: this.headers_object
    };

    return this.http.post(AppURL + 'exchange/crypto-to-crypto/tx', us, httpOptions);
  }  

}