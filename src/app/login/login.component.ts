import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '~/app/shared/models/login-response';
import { ApplicationContext } from '~/app/shared/services/application-context';
import { AuthService } from '~/app/shared/services/auth.service';

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    isLoading: boolean;
    username: string = 'sysadmin';
    password: string = '123456';

    constructor(private auth: AuthService, private router: Router,
                private applicationContext: ApplicationContext) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/

    }

    ngOnInit(): void {
        this.isLoading = false;
    }

    onSigninButtonTap(): void {
        const userName = this.username;
        const password = this.password;
        this.isLoading = true;
        this.auth.login(userName, password).subscribe(
            (data: LoginResponse) => {
                this.applicationContext.setUserName(userName);
                this.applicationContext.storeProfile(data);
                this.isLoading = false;
                this.router.navigate(['tracking']);
            },
            (error) => {
                this.isLoading = false;
            },
            () => {
                this.isLoading = false;
            }
        );
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
