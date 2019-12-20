import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbToastrModule,
  NbToastrService,
} from '@nebular/theme';

import { TrackService } from './services/track.service';

import { AppComponent } from './app.component';
import { TrackComponent } from './track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    TrackComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot([]),
    BrowserModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    NbToastrModule.forRoot(),
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
  ],
  providers: [
    TrackService,
    NbToastrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
