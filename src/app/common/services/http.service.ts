// import { PostServerDataSource } from './../models/post-server-datasource';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { GlobalService } from './global.service';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
// import { ServerDataSource } from 'ng2-smart-table';
@Injectable(
    {
        providedIn: 'root',
    }
)
export class HttpService {
    date: Date
    constructor(
        private http: HttpClient,
        private _globalService: GlobalService,
        private _authService: AuthService,
       
        private router: Router
    ) { }
    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': this._authService.getToken
        });
    }
    private getHeadersWithoutBearer(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
    public login(endpoint: any, model: any): any {
        return this.http.post(this._globalService.apiHost + endpoint, model, { headers: this.getHeadersWithoutBearer() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public post(endpoint: string, model: any): any {
        return this.http.post(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            if(this._authService.isAuthenticated){
                 response = response;
                  return response;
            }else{
                //this.toastrService.error('Your session has expired, please login again', 'Logged out!')
                this.router.navigate(['/login'])

            }
           
           
        }));
    }
    public patch(endpoint: string, model: any): any {
        return this.http.patch(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public put(endpoint: string, model: any): any {
        return this.http.put(this._globalService.apiHost + endpoint, model, { headers: this.getHeaders() }
        ).pipe(map(response => {
            console.log(response);
            response = response;
            return response;
        }));
    }
    public get(endpoint: string, headerParams?: any): any {
        return this.http.get(this._globalService.apiHost + endpoint,
            {
                headers: this.getHeaders()
            }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    public delete(endpoint: string): any {
        return this.http.delete(this._globalService.apiHost + endpoint, { headers: this.getHeaders() }
        ).pipe(map(response => {
            response = response;
            return response;
        }));
    }
    // public getPaginations(endpoint: string): any {
    //     return new PostServerDataSource(this.http, {
    //         endPoint: this._globalService.apiHost + endpoint,
    //         dataKey: 'list',
    //         totalKey: 'count',
    //         // perPage:'per_page',
    //         // pagerPageKey:'pager_perpage_key'
    //     })
    // }
    getFromJson(endpoint: string): any {
        return this.http.get(endpoint);
    }

    private handleError(error: Response | any) {
        let errorMessage: any = {};
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


    // format(date: NgbDateStruct, format: string): string {
    //     if (!date) { return ''; }
    //     const mdt = moment([date.year, date.month - 1, date.day]);
    //     if (!mdt.isValid()) { return ''; }
    //     return mdt.format(format);
    // }
}
