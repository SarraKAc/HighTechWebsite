import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { DetailsProductsComponent } from './details-products/details-products.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'about',component:AboutComponent},
  {path:'details',component:DetailsProductsComponent},
  {path:'privacyPolicy',component:PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  