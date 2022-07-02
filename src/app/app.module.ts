import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlog } from './components/Add-Blog/add-blog.component';
import { BlogDetail } from './components/Blog/Blog-Detail/blog-detail.component';
import { BlogList } from './components/Blog/Blog-List/blog-list.component';
import { Blog } from './components/Blog/blog.component';
import { BlogService } from './components/Blog/blog.service';
import { EditBlog } from './components/Edit-Blog/edit-blog.component';
import { HeaderComponent } from './components/Header/header.component';
import { LoginComponent } from './components/login-component/login.component';
import { NewComponent } from './components/NewComponent/new.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    Blog,
    BlogList,
    BlogDetail,
    EditBlog,
    NewComponent,
    AddBlog,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlogService, DatePipe, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
