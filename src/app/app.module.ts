import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { GameItemComponent } from './components/game-item/game-item.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameVideoclipDialogComponent } from './components/game-videoclip-dialog/game-videoclip-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchFormComponent,
    GameItemComponent,
    GameListComponent,
    GameVideoclipDialogComponent
  ],
  entryComponents: [
    GameVideoclipDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
