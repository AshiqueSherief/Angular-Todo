import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, } from '@angular/material/form-field'; 
import { MatInputModule} from "@angular/material/input"
import { MatIconModule} from "@angular/material/icon";
import { TodoComponent } from './todo/todo.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { InnertableComponent } from './innertable/innertable.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FillerComponent } from './filler/filler.component';
import { AboutAppComponent } from './about-app/about-app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, NavBarComponent, TodoComponent, TableComponent, InnertableComponent, AboutComponent, HomeComponent, FooterComponent, FillerComponent, AboutAppComponent, ContactusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
