  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { HttpHeaders } from '@angular/common/http';
  import Cookies from 'universal-cookie';
  import { ENDPOINT } from '../utils/url';
  import { PreferenceResponse, PreferenceItem } from '../types/types';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class CheckoutService {
    private cookies = new Cookies();
    
      constructor(private http: HttpClient) {}

        public pagar(items: PreferenceItem[]): Observable<PreferenceResponse> {
        const token = this.cookies.get('token');
            const headers = new HttpHeaders()
              .set('Authorization', `Token ${token}`)
              .set('Content-Type', 'application/json');

          return this.http.post<PreferenceResponse>(
        ENDPOINT + 'create_preference/',
         { items},
        { headers }
      );
    }
  }