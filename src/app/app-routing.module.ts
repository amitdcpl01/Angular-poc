import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
// import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=> import ('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    component: AboutComponent,
    path:'about/:id'
  },

  {
    component: AboutComponent,
    path:'about',
    children:[
      {path:'company', component: AboutCompanyComponent},
       { path:'me', component: AboutMeComponent}
    ]
  },
  {
    component: HomeComponent,
    path:''
  },
  {
    component: NoPageComponent,
    path:'**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
