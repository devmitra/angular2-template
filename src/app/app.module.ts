import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app.component';
import  {DisplayFriendComponent} from "./components/displayFriend.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DisplayFriendComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
