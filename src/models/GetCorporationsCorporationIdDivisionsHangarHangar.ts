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
 * hangar object
 * @export
 * @interface GetCorporationsCorporationIdDivisionsHangarHangar
 */
export interface GetCorporationsCorporationIdDivisionsHangarHangar {
    /**
     * division integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdDivisionsHangarHangar
     */
    division?: number;
    /**
     * name string
     * @type {string}
     * @memberof GetCorporationsCorporationIdDivisionsHangarHangar
     */
    name?: string;
}

/**
 * Check if a given object implements the GetCorporationsCorporationIdDivisionsHangarHangar interface.
 */
export function instanceOfGetCorporationsCorporationIdDivisionsHangarHangar(value: object): value is GetCorporationsCorporationIdDivisionsHangarHangar {
    return true;
}

export function GetCorporationsCorporationIdDivisionsHangarHangarFromJSON(json: any): GetCorporationsCorporationIdDivisionsHangarHangar {
    return GetCorporationsCorporationIdDivisionsHangarHangarFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdDivisionsHangarHangarFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdDivisionsHangarHangar {
    if (json == null) {
        return json;
    }
    return {
        
        'division': json['division'] == null ? undefined : json['division'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}

export function GetCorporationsCorporationIdDivisionsHangarHangarToJSON(json: any): GetCorporationsCorporationIdDivisionsHangarHangar {
    return GetCorporationsCorporationIdDivisionsHangarHangarToJSONTyped(json, false);
}

export function GetCorporationsCorporationIdDivisionsHangarHangarToJSONTyped(value?: GetCorporationsCorporationIdDivisionsHangarHangar | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'division': value['division'],
        'name': value['name'],
    };
}

