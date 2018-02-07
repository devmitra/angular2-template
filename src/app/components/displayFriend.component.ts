import { Component,Input } from '@angular/core';
import {Friend} from "../models/friend";

@Component({
    selector: "display-friend",
    templateUrl: "./displayFriend.component.html",
    styleUrls:['./app.component.css']

})

export class DisplayFriendComponent {
    @Input() friend: Friend;
}