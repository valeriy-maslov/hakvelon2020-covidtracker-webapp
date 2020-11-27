import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

export interface AccountModel {
  email: string;
  password: string;
  lastName: string;
  middleName: string;
  firstName: string;
  title: string;
}

@Injectable()
export class AccountService {

  constructor(private http: HttpClient) {
  }

  checkIfAccountExists(email: string): Promise<boolean> {
    return new Promise(((resolve, reject) => {
      this.http.get(environment.base_url + '/accounts/check', {
        params: {
          email
        }
      }).subscribe((value: boolean) => resolve(value), error => reject(error));
    }));
  }

  registerNewAccount(account: AccountModel): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.base_url + '/accounts', account, {}
      ).subscribe(value => resolve(), error => reject(error));
    });
  }

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(environment.base_url + '/accounts/login', {
        email,
        password
      }, {}).subscribe(value => resolve(), error => reject(error));
    });
  }

  getAccountData(email: string): Promise<AccountModel> {
    return new Promise<AccountModel>((resolve, reject) => {
      this.http.get(environment.base_url + '/accounts/' + email, {})
        .subscribe((value: AccountModel) => resolve(value), error => reject(error));
    });
  }
}
