import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ElectronService } from './providers/electron.service';
import { WebviewDirective } from './directives/webview.directive';
import { VizabiDirective } from './directives/vizabi';

import { ModalModule, ProgressbarModule, AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AutoUpdateComponent } from './components/auto-update/auto-update.component';
import { TabFreshenerComponent } from './components/tab-freshener/tab-freshener.component';
import { HamburgerMenuComponent } from './components/menu/hamburger-menu.component';
import { ValidationFormComponent } from './components/validation-form/validation-form.component';
import { DdfDatasetConfigFormComponent } from './components/ddf-dataset-config-form/ddf-dataset-config-form.component';
import { FileSelectConfigFormComponent } from './components/file-select-config-form/file-select-config-form.component';
import { TabsNewComponent } from './components/tabs-new/tabs.component';
import { TabNewComponent } from './components/tabs-new/tab.component';
import { TabTitleEditComponent } from './components/tabs-new/tab-title-edit.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SmartPathSelectorComponent } from './components/smart-path-selector/smart-path-selector.component';
import { WaitIndicatorComponent } from './components/wait-indicator/wait-indicator.component';
import { ChartService } from './components/tabs/chart.service';
import { MessageService } from './message.service';
import { FreshenerService } from './components/tab-freshener/freshener.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LocalizationService } from './providers/localization.service';
import { VersionsFormComponent } from './components/versions-form/versions-form.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoUpdateComponent,
    TabFreshenerComponent,
    HamburgerMenuComponent,
    ValidationFormComponent,
    DdfDatasetConfigFormComponent,
    FileSelectConfigFormComponent,
    TabsNewComponent,
    TabNewComponent,
    TabTitleEditComponent,
    TabsComponent,
    SmartPathSelectorComponent,
    WaitIndicatorComponent,
    VersionsFormComponent,
    WebviewDirective,
    VizabiDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    ElectronService,
    ChartService,
    MessageService,
    FreshenerService,
    TranslateService,
    LocalizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
