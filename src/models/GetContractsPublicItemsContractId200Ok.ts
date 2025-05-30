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
 * @interface GetContractsPublicItemsContractId200Ok
 */
export interface GetContractsPublicItemsContractId200Ok {
    /**
     * is_blueprint_copy boolean
     * @type {boolean}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    isBlueprintCopy?: boolean;
    /**
     * true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract
     * @type {boolean}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    isIncluded: boolean;
    /**
     * Unique ID for the item being sold. Not present if item is being requested by contract rather than sold with contract
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    itemId?: number;
    /**
     * Material Efficiency Level of the blueprint
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    materialEfficiency?: number;
    /**
     * Number of items in the stack
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    quantity: number;
    /**
     * Unique ID for the item, used by the contract system
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    recordId: number;
    /**
     * Number of runs remaining if the blueprint is a copy, -1 if it is an original
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    runs?: number;
    /**
     * Time Efficiency Level of the blueprint
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    timeEfficiency?: number;
    /**
     * Type ID for item
     * @type {number}
     * @memberof GetContractsPublicItemsContractId200Ok
     */
    typeId: number;
}

/**
 * Check if a given object implements the GetContractsPublicItemsContractId200Ok interface.
 */
export function instanceOfGetContractsPublicItemsContractId200Ok(value: object): value is GetContractsPublicItemsContractId200Ok {
    if (!('isIncluded' in value) || value['isIncluded'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('recordId' in value) || value['recordId'] === undefined) return false;
    if (!('typeId' in value) || value['typeId'] === undefined) return false;
    return true;
}

export function GetContractsPublicItemsContractId200OkFromJSON(json: any): GetContractsPublicItemsContractId200Ok {
    return GetContractsPublicItemsContractId200OkFromJSONTyped(json, false);
}

export function GetContractsPublicItemsContractId200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContractsPublicItemsContractId200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'isBlueprintCopy': json['is_blueprint_copy'] == null ? undefined : json['is_blueprint_copy'],
        'isIncluded': json['is_included'],
        'itemId': json['item_id'] == null ? undefined : json['item_id'],
        'materialEfficiency': json['material_efficiency'] == null ? undefined : json['material_efficiency'],
        'quantity': json['quantity'],
        'recordId': json['record_id'],
        'runs': json['runs'] == null ? undefined : json['runs'],
        'timeEfficiency': json['time_efficiency'] == null ? undefined : json['time_efficiency'],
        'typeId': json['type_id'],
    };
}

export function GetContractsPublicItemsContractId200OkToJSON(json: any): GetContractsPublicItemsContractId200Ok {
    return GetContractsPublicItemsContractId200OkToJSONTyped(json, false);
}

export function GetContractsPublicItemsContractId200OkToJSONTyped(value?: GetContractsPublicItemsContractId200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'is_blueprint_copy': value['isBlueprintCopy'],
        'is_included': value['isIncluded'],
        'item_id': value['itemId'],
        'material_efficiency': value['materialEfficiency'],
        'quantity': value['quantity'],
        'record_id': value['recordId'],
        'runs': value['runs'],
        'time_efficiency': value['timeEfficiency'],
        'type_id': value['typeId'],
    };
}

