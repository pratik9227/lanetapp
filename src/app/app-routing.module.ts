import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {OtpComponent} from './otp/otp.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TwofaComponent} from './twofa/twofa.component';
import {KycComponent} from './kyc/kyc.component';
import {AccountsecurityComponent} from './accountsecurity/accountsecurity.component';
import {UpdateuserComponent} from './updateuser/updateuser.component';
import {MarketComponent} from './market/market.component';
import {ProfileComponent} from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { BankdetailsComponent } from './bankdetails/bankdetails.component';
import { CryptoCryptoComponent } from './crypto-crypto/crypto-crypto.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {AuthGuardService} from './authService/auth.component'




const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpwd', component: ForgotpasswordComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService]},
  {path: 'twofa', component: TwofaComponent},
  {path: 'kyc', component: KycComponent,canActivate:[AuthGuardService]},
  {path: 'accountsecurity', component: AccountsecurityComponent,canActivate:[AuthGuardService]},
  {path: 'updateuser', component: UpdateuserComponent,canActivate:[AuthGuardService]},
  {path: 'market', component: MarketComponent, canActivate:[AuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'privacypolicy', component: PrivacypolicyComponent},
  {path: 'termsandcondition', component: TermsandconditionComponent},
  {path: 'bankdetails', component: BankdetailsComponent, canActivate:[AuthGuardService]},
  {path: 'crypto-to-crypto', component: CryptoCryptoComponent, canActivate:[AuthGuardService]},
  {path: 'changepassword', component: ChangepasswordComponent, canActivate:[AuthGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
