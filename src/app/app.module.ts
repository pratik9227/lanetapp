import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider} from 'angularx-social-login' ;
import {CookieService} from 'ngx-cookie-service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { DocumentVerifyComponent } from './document-verify/document-verify.component';
import { DocumentVerifyProcessComponent } from './document-verify-process/document-verify-process.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { BuyCurrencyComponent } from './buy-currency/buy-currency.component';
import { SellCurrencyComponent } from './sell-currency/sell-currency.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { SecurityComponent } from './security/security.component';
import { TwofaComponent } from './twofa/twofa.component';
import { KycComponent } from './kyc/kyc.component';
import { AccountsecurityComponent } from './accountsecurity/accountsecurity.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { MarketComponent } from './market/market.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { MatInputModule } from '@angular/material/input';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CryptoCryptoComponent } from './crypto-crypto/crypto-crypto.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AuthGuardService} from './authService/auth.component'



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('695558974616-h2hs225n8t9htp22n5o7lekdrut3fbh2.apps.googleusercontent.com')
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    OtpComponent,
    DashboardComponent,
    NewpasswordComponent,
    PersonalInformationComponent,
    DocumentVerifyComponent,
    DocumentVerifyProcessComponent,
    Dashboard2Component,
    ProfileComponent,
    EditProfileComponent,
    BuyCurrencyComponent,
    SellCurrencyComponent,
    PaymentPageComponent,
    SecurityComponent,
    TwofaComponent,
    KycComponent,
    AccountsecurityComponent,
    UpdateuserComponent,
    MarketComponent,
    NavBarComponent,
    AboutComponent,
    ContactComponent,
    PrivacypolicyComponent,
    TermsandconditionComponent,
    BankdetailsComponent,
    CryptoCryptoComponent,
    ChangepasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    NgxQRCodeModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgApexchartsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [  {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  },
  CookieService,
  AuthGuardService,
  RegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
