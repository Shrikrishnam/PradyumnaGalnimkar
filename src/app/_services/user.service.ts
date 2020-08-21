import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError, Observable, ObservableInput } from 'rxjs';
import { Fitness } from '../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({ providedIn: 'root' })
export class UserService {

    public static BaseUrl = "http://localhost:6565/";

    constructor(private http: HttpClient) { }
    postfitnessdata(data){
      return this.http.post(UserService.BaseUrl+'allfriends',data,httpOptions).pipe(catchError(this.handleError));
    }

    getfitnessdata():Observable<Fitness[]> {
      return this.http.get<Fitness[]>(UserService.BaseUrl+'allfriends').pipe(catchError(this.handleError));
    }

    getClient(id:number):Observable<Fitness>{
      return this.http.get<Fitness>(`${UserService.BaseUrl+'allfriends'}/${id}`).pipe(catchError(this.handleError));
    }

    updateClient(client:Fitness){
      return this.http.put<void>(`${UserService.BaseUrl+'allfriends'}/${client.id}`,client,httpOptions);
    }

    deletefitnessdata(id:number):Observable<Fitness>{
      return this.http.delete<Fitness>(`${UserService.BaseUrl+'allfriends'}/${id}`,httpOptions).pipe(catchError(this.handleError));
    }

    contactusdata(data){
      return this.http.post(UserService.BaseUrl+'contactus',data,httpOptions).pipe(catchError(this.handleError));
    }

    private handleError(errorResponse:HttpErrorResponse){
      if(errorResponse.error instanceof ErrorEvent){
        console.log('Client Side Issue',errorResponse.error.message);
      }
      else{
        console.log('Server Side Issue',errorResponse);
      }
      return throwError("We are working on the issues,we will notify you sonn once it is resolved.");
    }
}