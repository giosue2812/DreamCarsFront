import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';
import { MModalDirective } from './directives/m-modal.directive';

@NgModule({
    declarations: [MCollapsibleDirective, MModalDirective],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    exports: [
        MCollapsibleDirective,
        MModalDirective
    ],
    providers: []
})
export class CoreModule { }
