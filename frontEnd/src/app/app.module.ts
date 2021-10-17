import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductsbycategoryComponent } from './components/productsbycategory/productsbycategory.component';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupContentsComponent } from './components/group-contents/group-contents.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { EditGroupsComponent } from './components/edit-groups/edit-groups.component';
import { PreviousOrdersComponent } from './components/previous-orders/previous-orders.component';
import { CommentComponent } from './components/comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    CategoriesComponent,
    NavbarComponent,
    SignupComponent,
    UserDashboardComponent,
    ProductsbycategoryComponent,
    GroupsComponent,
    GroupContentsComponent,
    ErrorMessageComponent,
    ProductPageComponent,
    CartComponent,
    ShippingComponent,
    UserSettingsComponent,
    EditGroupsComponent,
    PreviousOrdersComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
