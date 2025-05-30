/* tslint:disable */
/* eslint-disable */
/**
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * The version of the OpenAPI document: 1.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Forbidden model
 * @export
 * @interface Forbidden
 */
export interface Forbidden {
    /**
     * Forbidden message
     * @type {string}
     * @memberof Forbidden
     */
    error: string;
    /**
     * status code received from SSO
     * @type {number}
     * @memberof Forbidden
     */
    ssoStatus?: number;
}

/**
 * Check if a given object implements the Forbidden interface.
 */
export function instanceOfForbidden(value: object): value is Forbidden {
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function ForbiddenFromJSON(json: any): Forbidden {
    return ForbiddenFromJSONTyped(json, false);
}

export function ForbiddenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Forbidden {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'],
        'ssoStatus': json['sso_status'] == null ? undefined : json['sso_status'],
    };
}

export function ForbiddenToJSON(json: any): Forbidden {
    return ForbiddenToJSONTyped(json, false);
}

export function ForbiddenToJSONTyped(value?: Forbidden | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
        'sso_status': value['ssoStatus'],
    };
}

