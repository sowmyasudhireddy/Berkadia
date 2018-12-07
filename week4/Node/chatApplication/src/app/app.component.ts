import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from './chat.service';
import { Subject, Subscription, Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('textInput') textInput;
  title = 'chatApp';
  message = '';
  messages = [];
  typing = false;
  timout = undefined;
  username: string;
  typingUser = 'User';
  subscription: Subscription;



  constructor(private chatService: ChatService) {

  }


  ngOnInit() {
    fromEvent(this.textInput.nativeElement, 'input').pipe(map((event: Event) => (<HTMLInputElement>event.target).value))
      .pipe(debounceTime(1000)).pipe(distinctUntilChanged())
      .subscribe(data => this.sendTypingEvent(false));

    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });

    this.chatService.getTypingStatus().subscribe((typing) => {
      this.typing = (typing.username !== this.username) && typing.isTyping;
      console.log(this.typing);
      this.typingUser = typing.username;
    });
  }

  sendMessage() {
    if (this.message != null) {
      this.chatService.sendEvent('new-message', { msg: this.message, username: this.username});
      this.message = '';
    } else {
      alert('Message cannot be empty');
    }
  }

  sendTypingEvent(typingStatus) {
    this.chatService.sendEvent('typing', { username: this.username, isTyping: typingStatus });
  }
}