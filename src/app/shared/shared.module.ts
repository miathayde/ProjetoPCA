import { CommonModule } from '@angular/common';
import { NgxUiHeroModule, NgxUiHeroDataGridModule, NgxUiHeroInputFormsModule, NgxUiHeroChartsModule } from 'ngx-ui-hero';
import { FormsModule } from '@angular/forms';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports: [
      CommonModule,
      NgxUiHeroModule,
      NgxUiHeroDataGridModule,
      NgxUiHeroInputFormsModule,
      NgxUiHeroChartsModule,
      ModalModule.forRoot(),
      TabsModule.forRoot(),
      FormsModule,
      BrowserModule
    ],
    declarations: [
    ],
    providers: [],
    exports: [
        NgxUiHeroModule,
        NgxUiHeroDataGridModule,
        NgxUiHeroInputFormsModule,
        NgxUiHeroChartsModule,
        TabsModule
    ]
})

export class SharedModule { }