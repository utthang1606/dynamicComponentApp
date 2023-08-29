import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from "./app-routing.module";
@NgModule({
    declarations: [AppComponent],
    imports: [
        SharedModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        IonicModule.forRoot({
            scrollPadding: false,
            scrollAssist: false,
            swipeBackEnabled: false
        })
    ],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
