import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import {Routes,RouterModule} from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';

const appRoutes : Routes = [
{path : '',redirectTo : 'admin' , pathMatch : 'full' },
{path : 'admin', component : AdminComponent},
{path : 'adminhome', component : AdminhomeComponent},
{path : 'category', component : CategoryComponent},
{path : 'product', component : ProductComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminhomeComponent,
    ProductComponent,
    CategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
