import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from "nativescript-angular";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { SharedModule } from "~/app/shared/shared.module";
import { DeviceRoutingModule } from "~/app/tracking/device-routing.module";
import { DeviceListComponent } from './device-list.component';

@NgModule({
    imports: [
        DeviceRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        SharedModule
    ],

    declarations: [
        DeviceListComponent
    ],

    schemas: [NO_ERRORS_SCHEMA]
})
export class TrackingModule { }
