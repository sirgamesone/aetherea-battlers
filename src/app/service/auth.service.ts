import {Injectable} from '@angular/core';
import Moralis from 'moralis';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor() {
  }

  login(): void {
    Moralis.authenticate().then((user) => {
      Moralis.setAsyncStorage(user);
      console.log('LOGIN', user);
    });
  }

  logout(): void {
    Moralis.User.logOut().then(() => {
      console.log('LOGOUT');
    });
  }

  currentUser(): Moralis.User<Moralis.Attributes> | undefined {
    return Moralis.User.current();
  }


  currentUserAsync(): Promise<Moralis.User<Moralis.Attributes> | null> {
    return Moralis.User.currentAsync();
  }

  userIsLoggedIn(): boolean {
    return !!this.currentUser();
  }


}

