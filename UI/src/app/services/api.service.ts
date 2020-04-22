import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  httpPost(url, payload, header?) {
    if (header) {
      return this.http.post(environment.apiEndPoint+url, payload, header);
    } else {
      return this.http.post(environment.apiEndPoint+url, payload);
    }   
  }

  httpGet(url, header?) {
    if (header) {
      return this.http.get(environment.apiEndPoint+url, header);
    } else {
      return this.http.get(environment.apiEndPoint+url);
    }   
  }

}
