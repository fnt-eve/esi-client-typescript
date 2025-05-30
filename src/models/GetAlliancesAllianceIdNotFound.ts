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
 * Not found
 * @export
 * @interface GetAlliancesAllianceIdNotFound
 */
export interface GetAlliancesAllianceIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetAlliancesAllianceIdNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the GetAlliancesAllianceIdNotFound interface.
 */
export function instanceOfGetAlliancesAllianceIdNotFound(value: object): value is GetAlliancesAllianceIdNotFound {
    return true;
}

export function GetAlliancesAllianceIdNotFoundFromJSON(json: any): GetAlliancesAllianceIdNotFound {
    return GetAlliancesAllianceIdNotFoundFromJSONTyped(json, false);
}

export function GetAlliancesAllianceIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAlliancesAllianceIdNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetAlliancesAllianceIdNotFoundToJSON(json: any): GetAlliancesAllianceIdNotFound {
    return GetAlliancesAllianceIdNotFoundToJSONTyped(json, false);
}

export function GetAlliancesAllianceIdNotFoundToJSONTyped(value?: GetAlliancesAllianceIdNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

