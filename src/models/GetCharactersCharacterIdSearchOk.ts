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
 * @interface GetCharactersCharacterIdSearchOk
 */
export interface GetCharactersCharacterIdSearchOk {
    /**
     * agent array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    agent?: Array<number>;
    /**
     * alliance array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    alliance?: Array<number>;
    /**
     * character array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    character?: Array<number>;
    /**
     * constellation array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    constellation?: Array<number>;
    /**
     * corporation array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    corporation?: Array<number>;
    /**
     * faction array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    faction?: Array<number>;
    /**
     * inventory_type array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    inventoryType?: Array<number>;
    /**
     * region array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    region?: Array<number>;
    /**
     * solar_system array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    solarSystem?: Array<number>;
    /**
     * station array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    station?: Array<number>;
    /**
     * structure array
     * @type {Array<number>}
     * @memberof GetCharactersCharacterIdSearchOk
     */
    structure?: Array<number>;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdSearchOk interface.
 */
export function instanceOfGetCharactersCharacterIdSearchOk(value: object): value is GetCharactersCharacterIdSearchOk {
    return true;
}

export function GetCharactersCharacterIdSearchOkFromJSON(json: any): GetCharactersCharacterIdSearchOk {
    return GetCharactersCharacterIdSearchOkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdSearchOkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdSearchOk {
    if (json == null) {
        return json;
    }
    return {
        
        'agent': json['agent'] == null ? undefined : json['agent'],
        'alliance': json['alliance'] == null ? undefined : json['alliance'],
        'character': json['character'] == null ? undefined : json['character'],
        'constellation': json['constellation'] == null ? undefined : json['constellation'],
        'corporation': json['corporation'] == null ? undefined : json['corporation'],
        'faction': json['faction'] == null ? undefined : json['faction'],
        'inventoryType': json['inventory_type'] == null ? undefined : json['inventory_type'],
        'region': json['region'] == null ? undefined : json['region'],
        'solarSystem': json['solar_system'] == null ? undefined : json['solar_system'],
        'station': json['station'] == null ? undefined : json['station'],
        'structure': json['structure'] == null ? undefined : json['structure'],
    };
}

export function GetCharactersCharacterIdSearchOkToJSON(json: any): GetCharactersCharacterIdSearchOk {
    return GetCharactersCharacterIdSearchOkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdSearchOkToJSONTyped(value?: GetCharactersCharacterIdSearchOk | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'agent': value['agent'],
        'alliance': value['alliance'],
        'character': value['character'],
        'constellation': value['constellation'],
        'corporation': value['corporation'],
        'faction': value['faction'],
        'inventory_type': value['inventoryType'],
        'region': value['region'],
        'solar_system': value['solarSystem'],
        'station': value['station'],
        'structure': value['structure'],
    };
}

