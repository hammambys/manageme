import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
  authenticated = false;

  constructor(private http: HttpClient) {}

  authenticate(
    credentials: { username: any; password: any },
    callback: { (): void; (): any }
  ) {
    const headers = new HttpHeaders(
      credentials
        ? {
            authorization:
              'Basic ' +
              btoa(credentials.username + ':' + credentials.password),
          }
        : {}
    );

    this.http.get('user', { headers: headers }).subscribe((response) => {
      if (response) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }
}
