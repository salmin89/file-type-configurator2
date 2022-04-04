import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileTypeConfiguratorComponent } from './file-type-configurator/file-type-configurator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfigMatchingGroupComponent } from './config-matching-group/config-matching-group.component';

@NgModule({
  declarations: [AppComponent, FileTypeConfiguratorComponent, ConfigMatchingGroupComponent],
  imports: [BrowserModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
