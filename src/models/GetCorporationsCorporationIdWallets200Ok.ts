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
 * @interface GetCorporationsCorporationIdWallets200Ok
 */
export interface GetCorporationsCorporationIdWallets200Ok {
    /**
     * balance number
     * @type {number}
     * @memberof GetCorporationsCorporationIdWallets200Ok
     */
    balance: number;
    /**
     * division integer
     * @type {number}
     * @memberof GetCorporationsCorporationIdWallets200Ok
     */
    division: number;
}

/**
 * Check if a given object implements the GetCorporationsCorporationIdWallets200Ok interface.
 */
export function instanceOfGetCorporationsCorporationIdWallets200Ok(value: object): value is GetCorporationsCorporationIdWallets200Ok {
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('division' in value) || value['division'] === undefined) return false;
    return true;
}

export function GetCorporationsCorporationIdWallets200OkFromJSON(json: any): GetCorporationsCorporationIdWallets200Ok {
    return GetCorporationsCorporationIdWallets200OkFromJSONTyped(json, false);
}

export function GetCorporationsCorporationIdWallets200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCorporationsCorporationIdWallets200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'balance': json['balance'],
        'division': json['division'],
    };
}

export function GetCorporationsCorporationIdWallets200OkToJSON(json: any): GetCorporationsCorporationIdWallets200Ok {
    return GetCorporationsCorporationIdWallets200OkToJSONTyped(json, false);
}

export function GetCorporationsCorporationIdWallets200OkToJSONTyped(value?: GetCorporationsCorporationIdWallets200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'balance': value['balance'],
        'division': value['division'],
    };
}

