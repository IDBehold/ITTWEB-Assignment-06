import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Workout} from './workouts/workout';
import {Exercise} from './workouts/exercise';
import {HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication/authentication.service";

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorkoutsService {
  private testUrl = 'api/hello';
  private apiUrl = 'http://salty-garden-88598.herokuapp.com/api'; // URL to API

  constructor(private http: Http, private auth: AuthenticationService) {
  }

  getWorkouts(): Promise<Workout[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Workout)
      .catch(this.handleError);
  }

  getWorkout(id: string): Promise<Workout> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Workout)
      .catch(this.handleError);
  }

  createWorkout(name: string): Promise<Workout> {
    const url = `${this.apiUrl}/workout`;
    let headers = this.getHeaders();
    return this.http
      .post(url, JSON.stringify({name: name}), {
        headers: headers,
      })
      .toPromise()
      .then(res => res.json() as Workout)
      .catch(this.handleError);
  }

  createExercise(id: string, exercise: string, description: string, set: number, reps: number): Promise<Workout> {
    const url = `${this.apiUrl}/exercise`;
    return this.http
      .post(url, JSON.stringify({
        id: id,
        exercise: exercise,
        description: description,
        set: set,
        reps: reps
      }), {headers: this.getHeaders()})
      .toPromise()
      .then(res => res.json() as Workout)
      .catch(this.handleError);
  }

  countUp(id: string): Promise<Workout> {
    const url = `${this.apiUrl}/countUp/${id}`;
    return this.http.put(url, {}, {headers: this.getHeaders()})
      .toPromise()
      .then(res => res.json() as Workout)
      .catch(this.handleError);
  }

  deleteWorkout(id: string): Promise<void> {
    const url = `${this.apiUrl}/${id}}`;
    return this.http.delete(url, {headers: this.getHeaders()})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Error occured', error);
    return Promise.reject(error.message || error);
  }

  private getHeaders() {
    let headers =  new Headers();
    headers.append('Content-type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.auth.getToken());
    return headers;
  }

  sayHello(): Observable<any> {
    return this.http.get(this.testUrl).map((response: Response) => {
        return response.text();
    });
}
}
