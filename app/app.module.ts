import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
