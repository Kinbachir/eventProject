import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatCardModule} from "@angular/material/card";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ListeEventComponent } from './liste-event/liste-event.component';
import {RouterModule} from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AddFormComponent } from './add-form/add-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialog} from "@angular/material/dialog";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {EventServiceService} from "./services/event-service.service";

@NgModule({
  declarations: [
    AppComponent,
    ListeEventComponent,
    AddFormComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {path: '', component: ListeEventComponent},
    ]),
    ReactiveFormsModule,
    NgbModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [MatDialog,MatDatepickerModule,
    MatNativeDateModule ,EventServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
