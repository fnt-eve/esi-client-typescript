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
 * 200 ok object
 * @export
 * @interface GetCorporationsCorporationIdFacilities200Ok
 */
export interface GetCorporationsCorporationIdFacilities200Ok {
    /**
     * facility_id integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdFacilities200Ok
     */
    facilityId: number;
    /**
     * system_id integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdFacilities200Ok
     */
    systemId: number;
    /**
     * type_id integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdFacilities200Ok
     */
    typeId: number;
}

/**
 * Check if a given object implements the GetCorporationsCorporationIdFacilities200Ok interface.
 */
export function instanceOfGetCorporationsCorporationIdFacilities200Ok(value: object): value is GetCorporationsCorporationIdFacilities200Ok {
    if (!('facilityId' in value) || value['facilityId'] === undefined) return false;
    if (!('systemId' in value) || value['systemId'] === undefined) return false;
    if (!('typeId' in value) || value['typeId'] === undefined) return false;
    return true;
}

export function GetCorporationsCorporationIdFacilities200OkFromJSON(json: any): GetCorporationsCorporationIdFacilities200Ok {
    return GetCorporationsCorporationIdFacilities200OkFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdFacilities200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdFacilities200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'facilityId': json['facility_id'],
        'systemId': json['system_id'],
        'typeId': json['type_id'],
    };
}

export function GetCorporationsCorporationIdFacilities200OkToJSON(json: any): GetCorporationsCorporationIdFacilities200Ok {
    return GetCorporationsCorporationIdFacilities200OkToJSONTyped(json, false);
}

export function GetCorporationsCorporationIdFacilities200OkToJSONTyped(value?: GetCorporationsCorporationIdFacilities200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'facility_id': value['facilityId'],
        'system_id': value['systemId'],
        'type_id': value['typeId'],
    };
}

