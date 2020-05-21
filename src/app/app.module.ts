import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PrintPageComponent } from './pages/print-page/print-page.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PrintPageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
