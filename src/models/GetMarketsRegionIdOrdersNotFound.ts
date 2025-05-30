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
 * @interface GetMarketsRegionIdOrdersNotFound
 */
export interface GetMarketsRegionIdOrdersNotFound {
    /**
     * Not found message
     * @type {string}
     * @memberof GetMarketsRegionIdOrdersNotFound
     */
    error?: string;
}

/**
 * Check if a given object implements the GetMarketsRegionIdOrdersNotFound interface.
 */
export function instanceOfGetMarketsRegionIdOrdersNotFound(value: object): value is GetMarketsRegionIdOrdersNotFound {
    return true;
}

export function GetMarketsRegionIdOrdersNotFoundFromJSON(json: any): GetMarketsRegionIdOrdersNotFound {
    return GetMarketsRegionIdOrdersNotFoundFromJSONTyped(json, false);
}

export function GetMarketsRegionIdOrdersNotFoundFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetMarketsRegionIdOrdersNotFound {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetMarketsRegionIdOrdersNotFoundToJSON(json: any): GetMarketsRegionIdOrdersNotFound {
    return GetMarketsRegionIdOrdersNotFoundToJSONTyped(json, false);
}

export function GetMarketsRegionIdOrdersNotFoundToJSONTyped(value?: GetMarketsRegionIdOrdersNotFound | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

