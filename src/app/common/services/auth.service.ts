// import { ToastrService } from 'ngx-toastr';

import { GlobalService } from './global.service';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    public jwtHelper: JwtHelperService = new JwtHelperService();
    private _currentUser: any;
    private loggedIn = false;
    public redirectURL = '';
    //token: any;

    constructor(
        private handler: HttpBackend,
        private _router: Router,
        private http: HttpClient,
        public _globalService: GlobalService,
        // private toastrService: ToastrService
    ) {
       // this.http = new HttpClient(this.handler);
        const token = this.getToken;
        if (token) {
            this._currentUser = this.jwtHelper.decodeToken(token);
        }
        this.isAuthenticated()
    }
    // private getHeaders(): HttpHeaders {
    //     return new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     });
    // }
    private static generateHeaders(): { headers: HttpHeaders } {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }
    public login(model: any) {
        return this.http.post( 
               this._globalService.apiHost + 'kwtchama-channel', model, AuthService.generateHeaders()).pipe(map(data => {
          
            if (data['response_description'] === 'success') {
                localStorage.setItem('chama-token', data['access_token']);
                this._currentUser = this.jwtHelper.decodeToken(localStorage.getItem('chama-token'));
                //return true;
                this.loggedIn = true;
            } else {
                localStorage.removeItem('chama-token');
                this.loggedIn = false;
            }
            return data;
        }));
    }
    public logout(): void {
        localStorage.removeItem('chama-token');
        this._currentUser = null;
        this.loggedIn = false; 
    }

    public getRoles(): any {

    }
    get getToken(): any {
        return localStorage.getItem('chama-token');
    }
    get currentUser() {
        return this._currentUser
    }
    private checkToken(): any {
        return !!localStorage.getItem('chama-token');
    }

    public unauthorizedAccess(error: any): void {
      
        
        this.logout();
        this._router.navigate(['/login']);
    }

    // public isLoggedIn(): boolean {
    //    //  return tokenNotExpired('hims-token');

    //     return true;
    // }
    isAuthenticated(): boolean {
        const token = this.getToken;
        if (token) {
            return !this.jwtHelper.isTokenExpired(token);
        } else {
           
            this.logout()
            
        }
    }

    public getJWTValue(): any {
        const token = this.getToken;
        //  return this.jwtHelper.decodeToken(token);
    }

    private handleError(error: Response | any) {

        let errorMessage: any = {};
        // Connection error
        if (error.status === 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: 'Sorry, there was a connection error occurred. Please try again.',
            };
        } else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
}
