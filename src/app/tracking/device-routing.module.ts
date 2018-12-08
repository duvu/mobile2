import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular";
import { DeviceListComponent } from "~/app/tracking/device-list.component";

const routes: Routes = [
    { path: "", component: DeviceListComponent }
    // { path: "car-detail/:id", component: CarDetailComponent },
    // { path: "car-detail-edit/:id", component: CarDetailEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DeviceRoutingModule { }
