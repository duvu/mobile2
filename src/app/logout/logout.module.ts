import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LogoutRoutingModule } from "~/app/logout/logout-routing.module";
import { LogoutComponent } from "~/app/logout/logout.component";
import { SharedModule } from "~/app/shared/shared.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        LogoutRoutingModule,
        SharedModule
    ],
    declarations: [
        LogoutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LogoutModule { }
