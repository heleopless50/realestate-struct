import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPropertPanelComponent } from './admin-property-panel/admin-propert-panel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  declarations: [AdminHeaderComponent, AdminPropertPanelComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdminModule {


  
}
