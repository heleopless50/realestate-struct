import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BlocksModule } from './blocks/blocks.module';
import { AppComponent } from './blocks/root/app.component';
import { AdminHeaderComponent } from './admin.module/admin-header/admin-header.component';
import { AdminPropertPanelComponent } from './admin.module/admin-property-panel/admin-propert-panel.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, BlocksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
