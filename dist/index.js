"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthTokenWithEmail = void 0;
const axios_1 = require("axios");
const getUserAuthToken = (url, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uuid = '4B8DE499-E3C7-45A7-A778-43F895B07972';
        const lang = 'en';
        const response = yield axios_1.default.post(url, {
            "channel_type": "email",
            "grant_type": "password",
            udid: uuid,
            lang: lang,
            username: email,
            password: password
        }, { headers: {
                Authorization: `Basic Y3ViZS1tb2JpbGVhdXRoOmxoS2hWdlBFRmtqN0VDNjFWdG9DS2g1Q2ZhSndKNA==`,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        return response.data;
    }
    catch (error) {
        throw error;
    }
});
/**
 * @Method: Returns the plural form of any noun.
 * @Param: {string, string, string}
 * @Return: {Promise<string | undefined>}
 */
function getAuthTokenWithEmail(baseURL, email, password) {
    return getUserAuthToken(`${baseURL}/api/oauth/token`, email, password);
}
exports.getAuthTokenWithEmail = getAuthTokenWithEmail;
