import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// -- imports to Firebase --
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

// here will set datas Firebase access
export const firebaseConfig = {
    apiKey: "AIzaSyAnnRxyebngMfFVIgcDzGzW2_S5ReAD46c",
    authDomain: "what-i-do-6b1b3.firebaseapp.com",
    databaseURL: "https://what-i-do-6b1b3.firebaseio.com",
    projectId: "what-i-do-6b1b3",
    storageBucket: "",
    messagingSenderId: "519227470487"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
