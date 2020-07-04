import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import {PreloadAllModules, RouteReuseStrategy, RouterModule, Routes} from "@angular/router";
import {FilterPipe} from "./utils/filter.pipe";
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import "reflect-metadata";
import { PillComponent } from './components/pill/pill.component';
import { FooterComponent } from './components/footer/footer.component';
import {ProjectsResolverService} from "./services/projects-resolver.service";
import {CustomReuseStrategy} from "./shared/routing";
import {CustomPreloadingStrategy} from "./shared/preloading";
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent, resolve: [ProjectsResolverService], data: { preload: true } },
  { path: '**',   redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    CardComponent,
    HeaderComponent,
    FilterPipe,
    SearchComponent,
    PillComponent,
    FooterComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy }),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    CustomPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
