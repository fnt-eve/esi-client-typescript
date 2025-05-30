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
 * @interface GetUniverseStargatesStargateIdNotFound
 */
export interface GetUniverseStargatesStargateIdNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetUniverseStargatesStargateIdNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the GetUniverseStargatesStargateIdNotFound interface.
 */
export function instanceOfGetUniverseStargatesStargateIdNotFound(value: object): value is GetUniverseStargatesStargateIdNotFound {
    return true;
}

export function GetUniverseStargatesStargateIdNotFoundFromJSON(json: any): GetUniverseStargatesStargateIdNotFound {
    return GetUniverseStargatesStargateIdNotFoundFromJSONTyped(json, false);
}

export function GetUniverseStargatesStargateIdNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUniverseStargatesStargateIdNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetUniverseStargatesStargateIdNotFoundToJSON(json: any): GetUniverseStargatesStargateIdNotFound {
    return GetUniverseStargatesStargateIdNotFoundToJSONTyped(json, false);
}

export function GetUniverseStargatesStargateIdNotFoundToJSONTyped(value?: GetUniverseStargatesStargateIdNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

