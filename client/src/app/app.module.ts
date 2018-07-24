//Modules
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-bootstrap';
import { FlashMessagesModule, FlashMessagesService } from "angular2-flash-messages";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatMenuModule,
         MatExpansionModule,
         MatRadioModule,
         MatDialogModule,
         MatSelectModule} from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";


//Components
import { AboutComponent } from './components/about/about.component';
import { AddtestComponent } from './admin/addtest/addtest.component';
import { AdmincontactComponent } from './admin/admincontact/admincontact.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AdminnavbarComponent } from './admin/adminnavbar/adminnavbar.component';
import { AdminscoreComponent } from './admin/adminscore/adminscore.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopcoursesComponent } from './components/topcourses/topcourses.component';
import { UserregisterComponent } from './admin/userregister/userregister.component';
import { ViewtestComponent } from './admin/viewtest/viewtest.component';


//Services
import{ ValidateService } from './services/validate.service';
import{ AuthService } from "./services/auth.service";
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
// import { LoginComponent } from './components/login/login.component';

//paths
const appRoutes :Routes =[
  {path:'',component:HomeComponent},
  // {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  // {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'admincontact',component:AdmincontactComponent},
  {path:'addtest',component:AddtestComponent},
  {path:'addquestion',component:AddquestionComponent},
  {path:'viewtest',component:ViewtestComponent},
  {path:'score',component:AdminscoreComponent}
];

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CarouselComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TopcoursesComponent,
    FooterComponent,
    AdmindashComponent,
    AdminnavbarComponent,
    UserregisterComponent,
    AdmincontactComponent,
    AdminscoreComponent,
    AddtestComponent,
    ViewtestComponent,
    AddquestionComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlashMessagesModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule.forRoot(appRoutes),
    MatSidenavModule,
    MatTableModule,
    CarouselModule.forRoot()
      ],
  providers: [ValidateService,
              FlashMessagesService,
              AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }
