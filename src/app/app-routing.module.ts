import { ProduitListComponent } from './produit-list/produit-list.component';
import { FactureComponent } from './facture/facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import { ClientRetrieveComponent } from './Client-Managment/client-retrieve/client-retrieve.component';
import { ClientAddComponent } from './Client-Managment/client-add/client-add.component';
import { ClientUpdateComponent } from './Client-Managment/client-update/client-update.component';
import { ClientProfileComponent } from './Client-Managment/client-profile/client-profile.component';
import { LoginComponent } from './Auth-Managment/login/login.component';
import { RouteGuardService } from './Services/route-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './Auth-Managment/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'facture', component: FactureComponent },
      { path: 'detailfacture/:idfacture', component: DetailFactureComponent },
      { path: 'listProduit', component: ProduitListComponent },
      {path:'clientretrieve',component: ClientRetrieveComponent},
      {path: 'add-client',component: ClientAddComponent},
      {path: 'modify-client/:id', component: ClientUpdateComponent },
      {path: 'client-profile', component: ClientProfileComponent}
    ], canActivate:[RouteGuardService]
  },
  {path: 'login',component: LoginComponent},
  {path: 'signup',component: SignupComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
