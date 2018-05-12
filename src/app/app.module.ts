import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule,MatGridListModule,MatButtonModule,MatDialogModule,MatIconModule,MatTooltipModule} from '@angular/material';
import {DialogOverviewExampleDialog} from './home/home.component';
import 'hammerjs';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {GetCardItemsService} from './services/get-card-items.service';

const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'card-detail/:id',component:CardDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    CardDetailComponent,
    DialogOverviewExampleDialog,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [HomeComponent,DialogOverviewExampleDialog],
  providers: [GetCardItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
