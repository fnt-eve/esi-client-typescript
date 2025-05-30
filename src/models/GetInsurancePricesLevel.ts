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
 * level object
 * @export
 * @interface GetInsurancePricesLevel
 */
export interface GetInsurancePricesLevel {
    /**
     * cost number
     * @type {number}
     * @memberof GetInsurancePricesLevel
     */
    cost: number;
    /**
     * Localized insurance level
     * @type {string}
     * @memberof GetInsurancePricesLevel
     */
    name: string;
    /**
     * payout number
     * @type {number}
     * @memberof GetInsurancePricesLevel
     */
    payout: number;
}

/**
 * Check if a given object implements the GetInsurancePricesLevel interface.
 */
export function instanceOfGetInsurancePricesLevel(value: object): value is GetInsurancePricesLevel {
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('payout' in value) || value['payout'] === undefined) return false;
    return true;
}

export function GetInsurancePricesLevelFromJSON(json: any): GetInsurancePricesLevel {
    return GetInsurancePricesLevelFromJSONTyped(json, false);
}

export function GetInsurancePricesLevelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInsurancePricesLevel {
    if (json == null) {
        return json;
    }
    return {
        
        'cost': json['cost'],
        'name': json['name'],
        'payout': json['payout'],
    };
}

export function GetInsurancePricesLevelToJSON(json: any): GetInsurancePricesLevel {
    return GetInsurancePricesLevelToJSONTyped(json, false);
}

export function GetInsurancePricesLevelToJSONTyped(value?: GetInsurancePricesLevel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cost': value['cost'],
        'name': value['name'],
        'payout': value['payout'],
    };
}

