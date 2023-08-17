import axios from 'axios';

interface FncyUserAuth {
    jti: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: Array<string>;
    refresh_token: string;
}

const getUserAuthToken = async (url: string,
                                email: string,
                                password: string) => {

    try {

        const uuid = '4B8DE499-E3C7-45A7-A778-43F895B07972'
        const lang = 'en'

        const response = await axios.post<FncyUserAuth>( url, {
                "channel_type" : "email",
                "grant_type" : "password",
                udid : uuid,
                lang : lang,
                username: email,
                password: password
            },
            {headers:{
                    Authorization: `Basic Y3ViZS1tb2JpbGVhdXRoOmxoS2hWdlBFRmtqN0VDNjFWdG9DS2g1Q2ZhSndKNA==`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

        return response.data;
    } catch (error) {
        throw error;
    }
}


/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string, string, string}
 * @Return: {Promise<string | undefined>}
 */
export function getAuthTokenWithEmail(baseURL: string,
                                      email: string,
                                      password: string): Promise<{
    jti: string;
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: Array<string>;
    refresh_token: string;
} | undefined> {

    return getUserAuthToken(`${baseURL}/api/oauth/token`, email, password)

}
