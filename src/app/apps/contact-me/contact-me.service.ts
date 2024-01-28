import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {
   sendEmailApiUrl = 'https://2l4nx6z3sl.execute-api.us-east-1.amazonaws.com/sendEmail';
   sendEmailRestApiUrl = 'https://lm59v8wmsa.execute-api.us-east-1.amazonaws.com/v1/contactMe';

  constructor(public http: HttpClient) {
  }

  sendEmail(data: any): Observable<any> {
    return this.http.post<any>(this.sendEmailRestApiUrl, data);
  }
}
