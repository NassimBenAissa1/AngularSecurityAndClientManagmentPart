import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LayoutComponent } from './home/layout/layout.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FactureComponent } from './facture/facture.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdateFactureComponent } from './update-facture/update-facture.component';
import { ClientRetrieveComponent } from './Client-Managment/client-retrieve/client-retrieve.component';
import { ClientAddComponent } from './Client-Managment/client-add/client-add.component';
import { ClientUpdateComponent } from './Client-Managment/client-update/client-update.component';
import { ClientProfileComponent } from './Client-Managment/client-profile/client-profile.component';
import { LoginComponent } from './Auth-Managment/login/login.component';
import { HttpInterceptorService } from './Services/http-interceptor.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Auth-Managment/signup/signup.component';
import { ClientProfileBadgeComponent } from './Client-Managment/client-profile-badge/client-profile-badge.component';
import { ClientRetrieveButtonsComponent } from './Client-Managment/client-retrieve-buttons/client-retrieve-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    SidbarComponent,
    LayoutComponent,
    DetailFactureComponent,
    FactureComponent,
    ProduitListComponent,
    UpdateFactureComponent,
    
    ClientRetrieveComponent,
          ClientAddComponent,
          ClientUpdateComponent,
          ClientProfileComponent,
          LoginComponent,
          NotFoundComponent,
          SignupComponent,
          ClientProfileBadgeComponent,
          ClientRetrieveButtonsComponent,
        
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
        BrowserAnimationsModule
  ],
  providers: [{provide : HTTP_INTERCEPTORS , useClass : HttpInterceptorService ,multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
