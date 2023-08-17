/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string, string, string}
 * @Return: {Promise<string | undefined>}
 */
export declare function getAuthTokenWithEmail(baseURL: string, email: string, password: string): Promise<{
    jti: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: Array<string>;
    refresh_token: string;
} | undefined>;
