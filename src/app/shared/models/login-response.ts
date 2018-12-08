export class LoginResponse {
    access_token: string;
    accountId: number;
    accountName: string;
    authorities: Array<string>;
    expires_in: number;
    jti: string;
    organizationId: number;
    organizationName: string;
    scope: string;
    token_type: string;
}
