import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as  EventBus from 'vertx3-eventbus-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public serverUrl =  new EventBus("http://ff34824f.ngrok.io/api/");

  constructor() { }
  get eventBus() {
    
    return this.serverUrl;
    
     
  }
}
