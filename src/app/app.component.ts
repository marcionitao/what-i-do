// -- imports Firebase --
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
// declare var firebase: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** First, we create 3 properties. items stores the Firebase list.
   * user will allow us to access the user state, and msgVal stores
   * the user-submitted entry.
   * */
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth,
              public af: AngularFireDatabase) {

      // and this.items grabs the list of entries from AngularFire.
      // We're also limiting the messages to 50 with limitToLast.
      this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    // allows us to check the authentication state
    this.user = this.afAuth.authState;
  }
  // login method that will be called when a login button is clicked
  login() {
      this.afAuth.auth.signInAnonymously();
  }
  // Then we log the userout with the logout() method.
  logout() {
      this.afAuth.auth.signOut();
  }
  // Then we create a Send method when a user hits the enter key from a textfield. 
  Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
  }

}
