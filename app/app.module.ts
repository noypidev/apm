import { ProductListComponent } from './products/product-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({ //This is the Angular Module Declaration
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
