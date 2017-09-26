import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { EmailPasswordCredentials } from '../shared/email-password-credentials';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {  
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  facebookLogin() {
    this.firebaseAuth.auth
    .signInWithPopup(new firebase.auth.FacebookAuthProvider)
    .then(res => console.log(res));

  }

  googleLogin() {
    this.firebaseAuth.auth
    .signInWithPopup(new firebase.auth.GoogleAuthProvider)
    .then(res => console.log(res));
  }
  
  twitterLogin() {
    this.firebaseAuth.auth
    .signInWithPopup(new firebase.auth.TwitterAuthProvider)
    .then(res => console.log(res));
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}