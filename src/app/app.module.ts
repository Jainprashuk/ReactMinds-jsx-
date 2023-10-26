import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { WhatisjsxComponent } from './mycomponents/whatisjsx/whatisjsx.component';
import { BasicsyntaxComponent } from './mycomponents/basicsyntax/basicsyntax.component';
import { JsxelementsComponent } from './mycomponents/jsxelements/jsxelements.component';
import { ExpressionsComponent } from './mycomponents/expressions/expressions.component';
import { JsxattributesComponent } from './mycomponents/jsxattributes/jsxattributes.component';
import { JsxfragmentsComponent } from './mycomponents/jsxfragments/jsxfragments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhatisjsxComponent,
    BasicsyntaxComponent,
    JsxelementsComponent,
    ExpressionsComponent,
    JsxattributesComponent,
    JsxfragmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
