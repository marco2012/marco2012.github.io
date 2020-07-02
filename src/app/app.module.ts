import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import { CardBigComponent } from './components/card-big/card-big.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '**',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    CardComponent,
    HeaderComponent,
    CardBigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
