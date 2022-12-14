import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventUrl="http://localhost:3000/api/events";
  specialEventUrl="http://localhost:3000/api/special";
  
  constructor(private http:HttpClient) { }
  
  getEvents(){
    return this.http.get<any>(this.eventUrl);
  }
  getSpecialEvents(){
    return this.http.get<any>(this.specialEventUrl);
  }
}
