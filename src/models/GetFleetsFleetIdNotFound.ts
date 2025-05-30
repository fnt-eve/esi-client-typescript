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
 * @interface GetFleetsFleetIdNotFound
 */
export interface GetFleetsFleetIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetFleetsFleetIdNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the GetFleetsFleetIdNotFound interface.
 */
export function instanceOfGetFleetsFleetIdNotFound(value: object): value is GetFleetsFleetIdNotFound {
    return true;
}

export function GetFleetsFleetIdNotFoundFromJSON(json: any): GetFleetsFleetIdNotFound {
    return GetFleetsFleetIdNotFoundFromJSONTyped(json, false);
}

export function GetFleetsFleetIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFleetsFleetIdNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetFleetsFleetIdNotFoundToJSON(json: any): GetFleetsFleetIdNotFound {
    return GetFleetsFleetIdNotFoundToJSONTyped(json, false);
}

export function GetFleetsFleetIdNotFoundToJSONTyped(value?: GetFleetsFleetIdNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

