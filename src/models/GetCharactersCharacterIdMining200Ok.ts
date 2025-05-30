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
 * @interface GetCharactersCharacterIdMining200Ok
 */
export interface GetCharactersCharacterIdMining200Ok {
    /**
     * date string
     * @type {Date}
     * @memberof GetCharactersCharacterIdMining200Ok
     */
    date: Date;
    /**
     * quantity integer
     * @type {number}
     * @memberof GetCharactersCharacterIdMining200Ok
     */
    quantity: number;
    /**
     * solar_system_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdMining200Ok
     */
    solarSystemId: number;
    /**
     * type_id integer
     * @type {number}
     * @memberof GetCharactersCharacterIdMining200Ok
     */
    typeId: number;
}

/**
 * Check if a given object implements the GetCharactersCharacterIdMining200Ok interface.
 */
export function instanceOfGetCharactersCharacterIdMining200Ok(value: object): value is GetCharactersCharacterIdMining200Ok {
    if (!('date' in value) || value['date'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('solarSystemId' in value) || value['solarSystemId'] === undefined) return false;
    if (!('typeId' in value) || value['typeId'] === undefined) return false;
    return true;
}

export function GetCharactersCharacterIdMining200OkFromJSON(json: any): GetCharactersCharacterIdMining200Ok {
    return GetCharactersCharacterIdMining200OkFromJSONTyped(json, false);
}

export function GetCharactersCharacterIdMining200OkFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCharactersCharacterIdMining200Ok {
    if (json == null) {
        return json;
    }
    return {
        
        'date': (new Date(json['date'])),
        'quantity': json['quantity'],
        'solarSystemId': json['solar_system_id'],
        'typeId': json['type_id'],
    };
}

export function GetCharactersCharacterIdMining200OkToJSON(json: any): GetCharactersCharacterIdMining200Ok {
    return GetCharactersCharacterIdMining200OkToJSONTyped(json, false);
}

export function GetCharactersCharacterIdMining200OkToJSONTyped(value?: GetCharactersCharacterIdMining200Ok | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'date': ((value['date']).toISOString().substring(0,10)),
        'quantity': value['quantity'],
        'solar_system_id': value['solarSystemId'],
        'type_id': value['typeId'],
    };
}

