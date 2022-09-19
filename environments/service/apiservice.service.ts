import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Injectable } from '@angular/core'; 
import { SERVER_URL } from '../environment'; 
@Injectable({ 
 providedIn: 'root'
}) 
export class ApiService { 
 
 constructor(private http: HttpClient) {} 
 
 getCep() { 
 let url = SERVER_URL; 
 console.log(url); 
 return this.http.get(url).toPromise(); 
 } 
} 
