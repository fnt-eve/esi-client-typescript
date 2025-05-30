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
 * Forbidden
 * @export
 * @interface GetContractsPublicBidsContractIdForbidden
 */
export interface GetContractsPublicBidsContractIdForbidden {
    /**
     * Forbidden message
     * @type {string}
     * @memberof GetContractsPublicBidsContractIdForbidden
     */
    error?: string;
}

/**
 * Check if a given object implements the GetContractsPublicBidsContractIdForbidden interface.
 */
export function instanceOfGetContractsPublicBidsContractIdForbidden(value: object): value is GetContractsPublicBidsContractIdForbidden {
    return true;
}

export function GetContractsPublicBidsContractIdForbiddenFromJSON(json: any): GetContractsPublicBidsContractIdForbidden {
    return GetContractsPublicBidsContractIdForbiddenFromJSONTyped(json, false);
}

export function GetContractsPublicBidsContractIdForbiddenFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContractsPublicBidsContractIdForbidden {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function GetContractsPublicBidsContractIdForbiddenToJSON(json: any): GetContractsPublicBidsContractIdForbidden {
    return GetContractsPublicBidsContractIdForbiddenToJSONTyped(json, false);
}

export function GetContractsPublicBidsContractIdForbiddenToJSONTyped(value?: GetContractsPublicBidsContractIdForbidden | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'error': value['error'],
    };
}

