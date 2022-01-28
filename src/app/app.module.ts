import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShipDetailsComponent } from './ship-details/ship-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table';
import {MatCardModule, MatDatepickerModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule } from '@angular/material';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from "@progress/kendo-angular-grid";
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    ShipDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSliderModule,
    InputsModule,
    GridModule,
    DateInputsModule,
    DragDropModule
  
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
