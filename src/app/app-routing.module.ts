import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//引入
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DomsComponent } from './components/doms/doms.component';
import { WorksComponent } from './components/works/works.component';
import { CallsComponent } from './components/calls/calls.component';
import { AnnimiteComponent } from './components/annimite/annimite.component';
import { AjaxComponent } from './components/ajax/ajax.component';
import { DetailComponent } from './components/detail/detail.component';
//配置
const routes: Routes = [
  {path:'news',component:NewsComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'doms',component:DomsComponent},
  {path:'works',component:WorksComponent},
  {path:'calls',component:CallsComponent},
  {path:'annimite',component:AnnimiteComponent},
  {path:'ajax',component:AjaxComponent},
  {path:'detail/:aid',component:DetailComponent},
  {path:'**',redirectTo:'home'}//默认路由
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
