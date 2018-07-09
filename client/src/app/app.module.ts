//Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-bootstrap';
import {FlashMessagesModule, FlashMessagesService} from "angular2-flash-messages";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatMenuModule,
         MatExpansionModule,
         MatRadioModule,
         MatDialogModule } from "@angular/material";
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

//Components
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopcoursesComponent } from './components/topcourses/topcourses.component';


//Services
import{ ValidateService } from './services/validate.service';
import{ AuthService } from "./services/auth.service";
import { FooterComponent } from './components/footer/footer.component';



//paths
const appRoutes :Routes =[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'profile',component:ProfileComponent}
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
    FooterComponent
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
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot()
      ],
  providers: [ValidateService,
              FlashMessagesService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
