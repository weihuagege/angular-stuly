import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {StorageService} from './services/storage.service';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DomsComponent } from './components/doms/doms.component';
import { WorksComponent } from './components/works/works.component';
import { CallsComponent } from './components/calls/calls.component';
import { AnnimiteComponent } from './components/annimite/annimite.component';
import { AjaxComponent } from './components/ajax/ajax.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    DomsComponent,
    WorksComponent,
    CallsComponent,
    AnnimiteComponent,
    AjaxComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
