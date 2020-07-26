import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {PortfolioComponent} from './pages/portfolio/portfolio.component';
import {CardComponent} from './components/card/card.component';
import {HeaderComponent} from './components/header/header.component';
import {PreloadAllModules, RouteReuseStrategy, RouterModule, Routes} from "@angular/router";
import {FilterPipe} from "./utils/filter.pipe";
import {SearchComponent} from './components/search/search.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import "reflect-metadata";
import {PillComponent} from './components/pill/pill.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsResolverService} from "./services/projects-resolver.service";
import {CustomPreloadingStrategy} from "./shared/preloading";
import {ResumeComponent} from './pages/resume/resume.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {ResumeRowComponent} from './pages/resume/resume-row/resume-row.component';
import {CustomReuseStrategy} from "./shared/routing";
import {DropdownComponent} from './components/dropdown/dropdown.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'curriculum', redirectTo: 'resume'},
  {path: 'cv', redirectTo: 'resume'},
  {path: 'CV', redirectTo: 'resume'},
  {path: 'profile', redirectTo: 'resume'},
  {path: 'portfolio', component: PortfolioComponent, resolve: [ProjectsResolverService], data: {preload: true}},
  {path: 'projects', redirectTo: 'portfolio'},
  {path: '**', redirectTo: '', pathMatch: 'full'},
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
    ResumeRowComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled'}),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  exports: [RouterModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
    CustomPreloadingStrategy,
    NgxSpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
