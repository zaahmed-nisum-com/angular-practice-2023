import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { AddComponent } from './icons/add/add.component';
import { EditComponent } from './icons/edit/edit.component';
import { DeleteComponent } from './icons/delete/delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListViewComponent,
    HeaderComponent,
    InputComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
