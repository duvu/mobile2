import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApplicationContext } from "~/app/shared/services/application-context";

@Component({
    selector: "Logout",
    moduleId: module.id,
    template: ``
})
export class LogoutComponent implements OnInit {
    constructor(private router: Router, private applicationContext: ApplicationContext) {}
    ngOnInit(): void {
        this.applicationContext.logout();
        this.router.navigate(["/login"]);
    }
}
