import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public get(): Promise<any[]> {
    return new Promise<any[]>((resolve: Function) => {
      this.http.get('assets/Stock.json')
        .subscribe(result => resolve(result));
    });
  }
}
