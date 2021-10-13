import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ProductsbycategoryComponent } from './components/productsbycategory/productsbycategory.component';
import { CommentsComponent } from './components/comments/comments.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
const routes: Routes = [

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],

  /* after cart-component creation */
  imports:
  [RouterModule.forRoot ([
    {path: '',redirectTo: '/login', pathMatch: 'full'},
    {path: 'login',component: LoginComponent},
    {path: 'store', component: ProductListComponent},
    { path: 'cart', component: CartComponent },

    {path: 'products/all/:id', component: ProductsbycategoryComponent},
    {path: 'dashboard', component: UserDashboardComponent},
    {path: 'comments', component: CommentsComponent},
    { path: 'products/:product_id', component: ProductDetailsComponent },

  ])],

  /* end of new code */

  exports: [RouterModule]
})
export class AppRoutingModule { }
