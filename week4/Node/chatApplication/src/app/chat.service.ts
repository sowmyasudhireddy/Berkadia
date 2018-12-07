import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class ChatService {
  private url = 'http://localhost:3000';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  sendEvent(event, message) {
    this.socket.emit(event, message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        console.log('in service ', message);
        observer.next(message);
      });
    });
  }

  public getTypingStatus() {
    return Observable.create((observer) => {
      this.socket.on('typing', (typingEvent) => {
        observer.next(typingEvent);
      });
    });
  }
}