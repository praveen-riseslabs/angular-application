import { Component, OnInit } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SocialappService } from 'src/app/services/socialappservice/Social.app.service';
import { Friends } from 'src/app/models/Friends';

@Component({
  selector: 'app-social',
  template: `
    <div class="app-wrapper">
      <h1>My Friends</h1>
      <h3 *ngIf="error">Fetching friends has failed.</h3>
      <ul *ngIf="!error">
        <li *ngFor="let friend of friends" [attr.data-test-id]="'li-' + friend.name">
          <span>{{ friend.name +' '}}</span>
          <button
            [attr.data-test-id]="'button-' + friend.name"
            [disabled]="friend.likeRequestPending"
            (click)="likeFriend(friend.name)"
          >
            Like {{ friend.likeCount }}
          </button>
        </li>
      </ul>
      <h3 *ngIf="error">Liking friend has failed.</h3>
    </div>
  `,
})
export class SocialappComponent implements OnInit {
  friends: Friends[] = [];
  error = false;
  
  constructor(private socialService: SocialappService) {}

  ngOnInit() {
    this.loadFriends();
  }

  loadFriends() {
    debugger
    this.socialService.getFriends().subscribe(
      (response: any) => {
        this.error = false;
        this.friends = response.friends
          .map((friend: any) => ({ ...friend, likeRequestPending: false }))
          .sort((a: Friends, b: Friends) => b.likeCount - a.likeCount)
          .slice(0, 5);
          console.log(this.friends)
      },
      (error) => {
        console.error(error);
        this.error = true;
      }
    );
  }

  likeFriend(friendName: string) {
    debugger
    const friend = this.friends.find((f) => f.name === friendName);

    if (friend) {
      friend.likeRequestPending = true;

      this.socialService.likeFriend(friendName).pipe(
        catchError(() => {
          friend.likeRequestPending = false;
          this.error = true;
          return of(null);
        })
      ).subscribe(
        (response: any) => {
          if (response) {
            friend.likeCount = response.likeCount;
            this.friends = this.friends.sort((a, b) => b.likeCount - a.likeCount);
          }

          friend.likeRequestPending = false;
          this.loadFriends()
        }
      );
    }
  }
}