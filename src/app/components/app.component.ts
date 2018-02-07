import { Component } from '@angular/core';

import {Friend} from "../models/friend";

@Component({
    selector: 'root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = "JK Rockers";
    friends: Friend[];
    constructor() {
        this.friends = [
            new Friend("1","Laba"),
            new Friend("2","Pungi"),
            new Friend("3","Kutta"),
            new Friend("4","Lej"),
            new Friend("5", "Hondo"),
            new Friend("6","Lele")
        ];
    }

}
