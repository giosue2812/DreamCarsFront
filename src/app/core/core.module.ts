import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { MCollapsibleDirective } from './directives/m-collapsible.directive';



@NgModule({
    declarations: [MCollapsibleDirective],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        MCollapsibleDirective
    ],
    providers: []
})
export class CoreModule { }
